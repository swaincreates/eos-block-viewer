import React, { useState, useEffect, MouseEvent } from "react";
import BlockList from "../BlockList/BlockList";
import BlockAPI from "../../api/BlockAPI";
import { present } from "../../api/BlockPresenter";
import { Block } from "../../interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

// NOTE: I used hooks/effects because the react documentation says to move in this direction,
//       however, I think it might not be clean on "container" components like this.
const App: React.FC = () => {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const blocks = await new BlockAPI().fetchLatest();
      setIsLoading(false);
      setBlocks(present(blocks));
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App--header">
        <div className="App--header-container">
          <div className="App--branding">EOS Block Viewer</div>
          <nav className="App--nav">
            <button
              className="App--load-button"
              onClick={async (event: MouseEvent) => fetchData()}
              disabled={isLoading}
            >
              LOAD
            </button>
          </nav>
        </div>
      </header>
      <main>
        {isError && (
          <div className="App--notice">Sorry, something went wrong</div>
        )}
        {isLoading ? (
          <div className="App--notice">
            <div className="App--notice-spinner">
              <FontAwesomeIcon icon={faSpinner} spin />
            </div>
            Loading...
          </div>
        ) : (
          <BlockList blocks={blocks} />
        )}
      </main>
    </div>
  );
};

export default App;
