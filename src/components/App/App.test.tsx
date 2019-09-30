import React from "react";
import ReactDOM from "react-dom";
import { render, waitForElement, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { act } from "react-dom/test-utils";
import App from "./App";
import { JsonRpc } from "eosjs";
import blocks from "../../../__fixtures__/blocks";
import BlockAPI from "../../api/BlockAPI";
import { createPublicKey } from "crypto";

jest.mock("../../api/BlockAPI");

it("loads 10 blocks when mounted", async () => {
  const { getAllByText } = render(<App />);
  const blocks = await waitForElement(() => getAllByText(/Timestamp./));
  expect(blocks.length).toEqual(10);
});

it("loads 10 blocks when button clicked", async () => {
  const { getByText, getAllByText } = render(<App />);
  await waitForElement(() => getAllByText(/Timestamp./));

  fireEvent.click(getByText("LOAD"));
  expect(getByText("Loading...")).toBeInTheDocument();

  const newBlocks = await waitForElement(() => getAllByText(/Timestamp./));
  expect(newBlocks.length).toEqual(10);
});

it("provides an error message when fetchLatest fails", async () => {
  //@ts-ignore guess TS doesnt understand jest mocks
  BlockAPI.mockImplementation(errorOnFetch);
  const { getByText } = render(<App />);
  const errorMessage = await waitForElement(() =>
    getByText("Sorry, something went wrong")
  );
  expect(errorMessage).toBeInTheDocument();
});

const errorOnFetch = () => {
  return {
    fetchLatest: jest.fn(() => Promise.resolve(new Error("timeout")))
  };
};
