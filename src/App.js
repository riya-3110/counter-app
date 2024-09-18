import "./App.css";
import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function App() {
  const [count, setCount] = useState(0);

  function handleCountPlus() {
    setCount(count + 1);
  }

  function handleCountMinus() {
    if (count === 0) {
      return 0;
    } else {
      setCount(count - 1);
    }
  }

  function handleRefresh(e) {
    window.location.reload();
  }

  return (
    <div className="container">
      <div className="counter-container">
        <div className="icon">
          <svg
            onClick={handleRefresh}
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="17"
            height="17"
          >
            <path d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z" />
          </svg>
        </div>
        <div className="card_text ">
          <h3 className="card_text_heading">{count}</h3>
        </div>
      </div>
      <form>
        <div className="button_container">
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              className="btn_one"
              onClick={handleCountPlus}
            >
              +
            </Button>
            <Button
              variant="contained"
              className="btn_two"
              onClick={handleCountMinus}
            >
              -
            </Button>
          </Stack>
        </div>
      </form>
    </div>
  );
}

export default App;
