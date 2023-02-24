import { useState } from "react";
import babylon from "./assets/babylon.jpeg";
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <h2>SELF-DISCIPLINE AFFAIRS</h2>
        <button>Note to self</button>
      </div>
      {/* the first book */}
      <div className="bk2">
        <div className="b2">
          <button>Read Now</button>
          <button>Audio book</button>
          <button>Book Summary</button>
        </div>
        <img src={babylon} />
        <p>
          Save at least 10 percent of<br></br>
          everything you earn and do not<br></br>
          confuse your necessary expenses <br></br>
          with your desires. Work hard to<br></br>
          improve your skills and ensure a<br></br> 
          future income because wealth is the<br></br>
          result of a reliable income stream.
        </p>
      </div>
    </div>
  );
}

export default App;
