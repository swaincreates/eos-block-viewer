import React from "react";
import BlockListItem from "../BlockListItem/BlockListItem";
import { Block } from "../../interfaces";
import "./BlockList.css";

type Props = {
  blocks: Block[];
};

const BlockList: React.FC<Props> = ({ blocks }) => (
  <div className="BlockList--container">
    {blocks.map(block => (
      <BlockListItem key={block.id} block={block} />
    ))}
  </div>
);

export default BlockList;
