package types

import (
	errorsmod "cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

var _ sdk.Msg = &MsgCreateGame{}

func NewMsgCreateGame(creator string, black string, red string) *MsgCreateGame {
	return &MsgCreateGame{
		Creator: creator,
		Black:   black,
		Red:     red,
	}
}

// Don't check balances here as that would be a stateful check
// Only perform stateless checks here as stateful are handled by the `DeliverTx`
func (msg *MsgCreateGame) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.Black)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid black address (%s)", err)
	}
	_, err = sdk.AccAddressFromBech32(msg.Red)
	if err != nil {
		return errorsmod.Wrapf(sdkerrors.ErrInvalidAddress, "invalid red address (%s)", err)
	}
	return nil
}
