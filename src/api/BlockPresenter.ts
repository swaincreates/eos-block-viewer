import { GetBlockResult } from "../interfaces";
import { Block } from "../interfaces";

class BlockPresenter implements Block {
  private block: GetBlockResult;
  public id: string;
  public timestamp: string;
  public actionCount: number;
  public raw: string;

  constructor(block: GetBlockResult) {
    this.block = block;

    this.id = block.id;
    this.timestamp = block.timestamp;
    this.actionCount = this.calculateActionCount();
    this.raw = JSON.stringify(block, undefined, 2);
  }

  public static present(blocks: GetBlockResult[]): Block[] {
    return blocks.map(block => new BlockPresenter(block));
  }

  private calculateActionCount(): number {
    if (!this.block.transactions) {
      return 0;
    } else {
      const count: number = this.block.transactions.reduce(
        (accumulator: number, transaction) => {
          if (typeof transaction.trx === "object") {
            return accumulator + transaction.trx.transaction.actions.length;
          }

          return accumulator;
        },
        0
      );
      return count;
    }
  }
}

export const present = BlockPresenter.present;
export default BlockPresenter;
