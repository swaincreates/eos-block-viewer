import React, { useState } from "react";
import { Block } from "../../interfaces";
import "./BlockListItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type Props = {
  block: Block;
};

const BlockListItem: React.FC<Props> = ({ block }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="BlockListItem" onClick={() => setIsVisible(!isVisible)}>
      <div className="BlockListItem--block-id">ID: {block.id}</div>
      <div className="BlockListItem--timestamp">
        Timestamp: {block.timestamp}
      </div>
      <div className="BlockListItem--actioncount">
        Action Count: {block.actionCount}
      </div>
      <div className={`BlockListItem--chevron ${isVisible && "active"}`}>
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      {isVisible && (
        <div className="BlockListItem--raw-block">
          <pre>{block.raw}</pre>
        </div>
      )}
    </div>
  );
};

export default BlockListItem;
