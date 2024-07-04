import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/checkers/checkers/params";
import { QueryParamsRequest } from "./types/checkers/checkers/query";
import { MsgUpdateParams } from "./types/checkers/checkers/tx";
import { GenesisState } from "./types/checkers/checkers/genesis";
import { QueryParamsResponse } from "./types/checkers/checkers/query";
import { MsgUpdateParamsResponse } from "./types/checkers/checkers/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/checkers.checkers.Params", Params],
    ["/checkers.checkers.QueryParamsRequest", QueryParamsRequest],
    ["/checkers.checkers.MsgUpdateParams", MsgUpdateParams],
    ["/checkers.checkers.GenesisState", GenesisState],
    ["/checkers.checkers.QueryParamsResponse", QueryParamsResponse],
    ["/checkers.checkers.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }