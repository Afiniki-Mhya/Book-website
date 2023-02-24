import { useState } from "react";
import richDad from "./assets/richDad.jpeg";
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
        <img src={richDad} />
        <p>
          Rich Dad Poor Dad is about<br></br>
          Robert Kiyosaki author and<br></br>
          his two dads—his real father<br></br>
          poor dad and the father of his<br></br>
          best friend rich dad—and the<br></br>
          ways in which both men shaped<br></br>
          his thoughts about money and investing.
        </p>
      </div>
    </div>
  );
}

export default App;
