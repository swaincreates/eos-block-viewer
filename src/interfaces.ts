import { GetBlockResult } from "eosjs/dist/eosjs-rpc-interfaces";

export interface Block {
  id: string;
  timestamp: string;
  actionCount: number;
  raw: string;
}

interface Transaction {
  trx:
    | string
    | {
        transaction: {
          actions: Object[];
          [extra: string]: any;
        };
        [extra: string]: any;
      };
  [extra: string]: any;
}

export interface GetBlockResult extends GetBlockResult {
  transactions?: Transaction[];
}
