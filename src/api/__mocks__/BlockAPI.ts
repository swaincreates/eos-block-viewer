import blocks from "../../../__fixtures__/blocks";

const mock = jest.fn().mockImplementation(() => {
  return {
    fetchLatest: jest.fn(() => Promise.resolve(blocks))
  };
});

export default mock;
