import { useState } from "react";
import failingForward from "./assets/failingForward.jpeg";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <h2>SELF-DISCIPLINE AFFAIRS</h2>
        <button>Note to self</button>
      </div>
      {/* the first book */}
      <div className="bk1">
        <div className="b1">
          <button>Read Now</button>
          <button>Audio book</button>
          <button>Book Summary</button>
        </div>
        <img src={failingForward} />
        <p>
          Are some people born to<br></br>
          achieve anything they want<br></br>
          while others struggle? What<br></br>
          is the real reason for their<br></br>
          success? John C. Maxwell has<br></br>
          the answer: The difference between<br></br>
          average people and achieving people<br></br>
          is their perception of and response to failure.
        </p>
      </div>
    </div>
  );
}

export default App;
