import { JsonRpc } from "eosjs";
import { GetBlockResult } from "../interfaces";

class BlockAPI {
  private blocks: GetBlockResult[] = [];
  // Apparently, https://api.eosnewyork.io no longer works, found new URL on github issue:
  private rpc = new JsonRpc("https://eos.greymass.com:443");

  // Note: Could add perf to only fetch blocks that arent loaded, but I believe there are
  //       10 new blocks every 5 seconds if I understand this right, so doesnt seem very helpful
  async fetchLatest(latestMax: number = 10): Promise<GetBlockResult[]> {
    const info = await this.rpc.get_info();

    for (let i = 0; i < latestMax; i++) {
      const block = await this.rpc.get_block(info.head_block_num - i);

      this.blocks.push(block);
    }

    return this.blocks;
  }
}

export default BlockAPI;
