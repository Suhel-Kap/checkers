import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";
import { Params } from "./types/checkers/checkers/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/checkers.checkers.Params", Params],
    
];

export { msgTypes }