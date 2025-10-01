import React from "react";

export default function Header({ currentScore, bestScore, onResetBest }) {
  return (
    <header className="header">
      <div>
        <h1 className="title">Memory Card Game</h1>
        <p className="subtitle">
          Click each card only once — cards shuffle after every click.
        </p>
      </div>

      <div className="scoreboard">
        <div className="scorebox">
          <div className="scorelabel">Score</div>
          <div className="scorevalue">{currentScore}</div>
        </div>

        <div className="scorebox">
          <div className="scorelabel">Best</div>
          <div className="scorevalue">{bestScore}</div>
        </div>

        <button className="btn btn-danger" onClick={onResetBest}>
          Reset Best
        </button>
      </div>
    </header>
  );
}
