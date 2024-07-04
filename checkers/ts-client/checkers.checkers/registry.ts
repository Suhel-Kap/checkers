import { GeneratedType } from "@cosmjs/proto-signing";
import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { MsgCreatePost } from "./types/checkers/checkers/tx";
import { MsgCreatePostResponse } from "./types/checkers/checkers/tx";
import { Params } from "./types/checkers/checkers/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.MsgCreatePost", MsgCreatePost],
    ["/checkers.checkers.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/checkers.checkers.Params", Params],
    
];

export { msgTypes }