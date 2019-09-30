import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import BlockList from "./BlockList";
import blocks from "../../../__fixtures__/blocks";
import { present } from "../../api/BlockPresenter";

it("renders list of elements passed to blocks Prop", () => {
  const { getAllByText } = render(<BlockList blocks={present(blocks)} />);
  expect(getAllByText(/Timestamp*/).length).toEqual(10);
});
