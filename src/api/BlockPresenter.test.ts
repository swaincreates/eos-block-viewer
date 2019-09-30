import BlockPresenter from "./BlockPresenter";
import blocks from "../../__fixtures__/blocks";
import { GetBlockResult } from "../interfaces";

describe(".calculateActionCount()", () => {
  it("calculates actionCount of a GetBlockResult", () => {
    const block = blocks[0] as GetBlockResult;
    const presenter = new BlockPresenter(block);
    expect(presenter.actionCount).toEqual(32);
  });

  it("returns 0 if there are no transactions", () => {
    let block = blocks[0];
    delete block.transactions;

    const presenter = new BlockPresenter(block);
    expect(presenter.actionCount).toEqual(0);
  });
});
