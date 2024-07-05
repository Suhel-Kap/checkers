# Steps to create a cosmos blockchain with Ignite CLI

We take the Docker route here to avoid the hassle of installing all the dependencies on our local machine.

1. Have Docker Desktop up and running if you're on a Mac like me.
2. Adjust the versions of Go, Ignite CLI and Node JS as you wish.
   1. As of writing this, the versions I used were Go 1.22.4, Ignite CLI 28.4.0 and Node JS 20.x
3. Then we create a docker image loaded wiht ignite CLI by
    ```bash
    docker build -f Dockerfile-ubuntu . -t checkers_i
    ```
4. We confirm the Ignite version by running
    ```bash
    docker run --rm -it checkers_i ignite version
    ```
5. Then we scaffold the basic project using the ignite CLI
    ```bash
    docker run --rm -it \
        -v $(pwd):/checkers -w /checkers \
        checkers_i \
        ignite scaffold chain github.com/suhel-kap/checkers
    ```
6. We scaffold a react frontend
    ```bash
    docker run --rm -it \
    -v $(pwd):/checkers -w /checkers \
    checkers_i \
    ignite scaffold react
    ```
7. We serve the chain by running
   ```bash
   docker run --rm -it \
    -v $(pwd):/checkers -w /checkers \
    -p 1317:1317 -p 3000:3000 -p 4500:4500 -p 5001:5000 -p 26657:26657 \
    --name checkers checkers_i \
    ignite chain serve
    ```
    Alternatively, we can create a standalone docker container and use that to serve the chain
    ```bash
    docker create --name checkers -i \
    -v $(pwd):/checkers -w /checkers \
    -p 1317:1317 -p 3000:3000 -p 4500:4500 -p 5001:5000 -p 26657:26657 \
    checkers_i
    docker start checkers
    docker exec -it checkers ignite chain serve
    ```
8. Now to have a working frontend to interact with the chain, we need to run (at this point i had to install ignite cli locally, because the node module installation of the react frontend needed a lot of space in memory and my docker container was running out of memory)
    ```bash
    ignite scaffold react
    ```
9. Then we need to create the hooks and the ts-client for the frontend to interact with the chain
    ```bash
    ignite generate hooks
    ```
10. The `ts-client` folder that is generated has a lot of issues that need to be fixed with `//@ts-ignore`. I fixed those issues manually, bascially a `{registry}` was having a mismatch in type due, so i had to ignore the type checking for that.
11. Once that is done, we have to create the build for the `ts-client`
    ```bash
    yarn install && yarn build
    ```
12. Now we can start the frontend by running
    ```bash
    yarn install && yarn dev
    ```

## Creating a message

1. We can create a message by running
    ```bash
    ignite scaffold message createPost title body
    ```

## Creating an ID handler for unique ID of each game

1. We can create it using:
   ```bash
   ignite scaffold single systemInfo nextId:uint \
        --module checkers \
        --no-message
   ```
   You must add --no-message. If you omit it, Ignite CLI creates an sdk.Msg and an associated service whose purpose is to overwrite your SystemInfo object. However, your SystemInfo.NextId must be controlled/incremented by the application and not by a player sending a value of their own choosing. Ignite CLI still creates convenient getters.

## Creating a map to store the game state

1. We can create it by running:
   ```bash
    ignite scaffold map storedGame board turn black red \
           --index index \
           --module checkers \
           --no-message
    ```

## Next we wrote a few unit tests

The tests were majorly focused on checking if we are able to detect any issues in parsing or validating the board, and also the if the genesis state of the chain is correct.

You can check out the tests in the `checkers/x/checkers/types/full_game_test.go` file.
