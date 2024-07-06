package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	"github.com/suhel-kap/checkers/x/checkers/testutil"
	"github.com/suhel-kap/checkers/x/checkers/types"
)

func TestCreateGame(t *testing.T) {
	_, msgServer, context := setupMsgServer(t)
	createResponse, err := msgServer.CreateGame(context, &types.MsgCreateGame{
		Creator: testutil.Alice,
		Black:   testutil.Bob,
		Red:     testutil.Carol,
	})
	require.Nil(t, err)
	require.EqualValues(t, types.MsgCreateGameResponse{
		GameIndex: "",
	}, *createResponse)
}
