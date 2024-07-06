package keeper_test

import (
	"context"
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "github.com/suhel-kap/checkers/testutil/keeper"
	"github.com/suhel-kap/checkers/x/checkers/keeper"
	checkers "github.com/suhel-kap/checkers/x/checkers/module"
	"github.com/suhel-kap/checkers/x/checkers/testutil"
	"github.com/suhel-kap/checkers/x/checkers/types"
)

func setupMsgServerCreateGame(t testing.TB) (keeper.Keeper, types.MsgServer, context.Context) {
	k, ctx := keepertest.CheckersKeeper(t)
	checkers.InitGenesis(ctx, k, *types.DefaultGenesis())
	return k, keeper.NewMsgServerImpl(k), ctx
}

func TestCreateGame(t *testing.T) {
	_, msgServer, context := setupMsgServerCreateGame(t)
	createResponse, err := msgServer.CreateGame(context, &types.MsgCreateGame{
		Creator: testutil.Alice,
		Black:   testutil.Bob,
		Red:     testutil.Carol,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateGameResponse{
		GameIndex: "1",
	}, *createResponse)
}

func TestCreate1GameHasSaved(t *testing.T) {
	keeper, msgServer, context := setupMsgServerCreateGame(t)
	msgServer.CreateGame(context, &types.MsgCreateGame{
		Creator: testutil.Alice,
		Black:   testutil.Bob,
		Red:     testutil.Carol,
	})
	systemInfo, found := keeper.GetSystemInfo(context)
	require.True(t, found)
	require.EqualValues(t, types.SystemInfo{
		NextId: 2,
	}, systemInfo)

	game1, found1 := keeper.GetStoredGame(context, "1")
	require.True(t, found1)
	require.EqualValues(t, types.StoredGame{
		Index: "1",
		Board: "*b*b*b*b|b*b*b*b*|*b*b*b*b|********|********|r*r*r*r*|*r*r*r*r|r*r*r*r*",
		Turn:  "b",
		Black: testutil.Bob,
		Red:   testutil.Carol,
	}, game1)
}
