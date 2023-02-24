import { useState } from "react";
import atomicHabits from "./assets/atomicHabits.jpeg";
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
        <img src={atomicHabits} />
        <p>
          Atomic Habits by James Clear<br></br>
          is a comprehensive,practical<br></br>
          guide on how to change your<br></br>
          habits and get 1% better every day.
        </p>
        {/* the second book */}
        <div className="bk2">
          <img src={babylon} />
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
