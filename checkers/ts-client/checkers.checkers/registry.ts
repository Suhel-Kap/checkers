import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/checkers/checkers/tx";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { QueryGetSystemInfoRequest } from "./types/checkers/checkers/query";
import { SystemInfo } from "./types/checkers/checkers/system_info";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { MsgCreatePostResponse } from "./types/checkers/checkers/tx";
import { QueryGetSystemInfoResponse } from "./types/checkers/checkers/query";
import { Params } from "./types/checkers/checkers/params";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.MsgCreatePost", MsgCreatePost],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.QueryGetSystemInfoRequest", QueryGetSystemInfoRequest],
    ["/checkers.checkers.SystemInfo", SystemInfo],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.MsgCreatePostResponse", MsgCreatePostResponse],
    ["/checkers.checkers.QueryGetSystemInfoResponse", QueryGetSystemInfoResponse],
    ["/checkers.checkers.Params", Params],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }