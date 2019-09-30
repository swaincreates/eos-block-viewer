import BlockAPI from "./BlockAPI";
import { JsonRpc } from "eosjs";

jest.mock("eosjs", () => ({ JsonRpc: jest.fn() }));

describe("fetchLatest", () => {
  it("returns 10 blocks after making 10 rpc.get_block() calls by default", async () => {
    //@ts-ignore guess TS doesnt understand jest mocks
    JsonRpc.mockImplementation(returnEmptyBlocks);
    const blocks = await new BlockAPI().fetchLatest();
    expect(blocks).toEqual([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]);
  });

  it("returns number of blocks passed to .fetchLatest()", async () => {
    //@ts-ignore guess TS doesnt understand jest mocks
    JsonRpc.mockImplementation(returnEmptyBlocks);
    const blocks = await new BlockAPI().fetchLatest(15);
    expect(blocks.length).toEqual(15);
  });
});

const returnEmptyBlocks = () => {
  return {
    get_info: jest.fn(() => Promise.resolve({ head_block_num: 13 })),
    get_block: jest.fn(() => Promise.resolve({}))
  };
};
