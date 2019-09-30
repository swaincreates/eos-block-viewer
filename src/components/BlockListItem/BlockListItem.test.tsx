import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlockListItem from "./BlockListItem";
import blocks from "../../../__fixtures__/blocks";
import { present } from "../../api/BlockPresenter";

it("renders the timestamp", () => {
  const { getByText } = render(<BlockListItem block={present(blocks)[0]} />);
  expect(getByText("Timestamp: 2019-09-27T14:46:31.000")).toBeInTheDocument();
});

it("renders the id", () => {
  const { getByText } = render(<BlockListItem block={present(blocks)[0]} />);
  expect(
    getByText(
      "ID: 04dcd924838b06076bca7dc2fd6422b2ff9cf548c757658056aad57fd03df49d"
    )
  ).toBeInTheDocument();
});

it("renders the action count", () => {
  const { getByText } = render(<BlockListItem block={present(blocks)[0]} />);
  expect(getByText("Action Count: 32")).toBeInTheDocument();
});

it("renders raw block data after click", () => {
  const block = present(blocks)[0];
  const { queryByText, getByText } = render(<BlockListItem block={block} />);

  // For some reason it wont pick up block.raw, so picking out a part of it to search for
  expect(queryByText(/.task_data./)).toBeNull();
  fireEvent.click(document.getElementsByClassName("BlockListItem")[0]);
  expect(getByText(/.task_data./)).toBeInTheDocument();
});
