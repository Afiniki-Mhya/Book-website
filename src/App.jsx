import { useState } from "react";
import atomicHabits from "./assets/atomicHabits.jpeg";
// import book1 from "./components/book1";
// import book2 from "./components/book2";
// import book3 from "./components/book3";
// import book4 from "./components/book4";
// import book2 from "./components/book2"
import "./App.css";

function App() {
  return (
    <div className="body">
      <div className="header">
        <h2>SELF-DISCIPLINE AFFAIRS</h2>
        <button>Note to self</button>
      </div>
      {/* the first book */}
      <div className="book">
        <img src={atomicHabits} />
        <div className="book-btn">
          <button>Read Now</button>
          <button>Audio book</button>
          <button>Book Summary</button>
        </div>

        <p>
          Atomic Habits by James Clear<br></br>
          is a comprehensive,practical<br></br>
          guide on how to change your<br></br>
          habits and get 1% better every day.
        </p>
      </div>
    </div>
  );
}

export default App;
