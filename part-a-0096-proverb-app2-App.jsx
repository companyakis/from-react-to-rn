import { useState } from "react";

import "./App.css";

import Proverb from "./components/Proverb";

function App() {
  
  const someProverbs = [
    "A rollling stone gathers no moss",
    "Kurt kışı geçirir, yediği ayazı unutmaz",
    "A barking dog never bites",
    "Güç atasını tanımaz",
    "Out of sight, out of mind",
    "Ayağını yorganına göre uzat",
  ];

  const [prb, setPrb] = useState([]);

  const selectProverb = () => {
    return someProverbs[Math.floor(Math.random() * someProverbs.length)];
  };

  const handleProverb = () => {
    setPrb([...prb, selectProverb()]);
  };

  return (
    <div className="proverb-app">
      <button className="btn" onClick={handleProverb}>
        Add a Proverb
      </button>

      <div className="all-proverbs">
        {prb.map((p, i) => {
          return <Proverb key={i} returnedProverb={p} />;
        })}
      </div>
    </div>
  );
}

export default App;
