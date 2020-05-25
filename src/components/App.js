import React, { useState } from "react";
import GameBoard from "./GameBoard";

const states = { start: "start", playing: "playing", ended: "ended" };
const gameOptions = ["swipe", "tap", "turn"];

function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(states.playing);
  const [sliderValue, setSliderValue] = useState(1);
  const randomNum = () =>
    Math.floor(Math.random() * Math.floor(gameOptions.length));
  const currentAction = gameOptions[randomNum()];

  const setGameEnd = () => {
    setGameState(states.ended);
  };

  const restartGame = () => {
    setScore(0);
    setGameState(states.playing);
  };

  const setGameStart = () => {
    setGameState(states.playing);
  };

  const randomColorStyles = {
    background: `${score % 2 === 0 ? "black" : "white"}`,
    color: `${score % 2 !== 0 ? "black" : "white"}`
  };

  return (
    <div className="app">
      {gameState === states.start && (
        <div className="flex-center-column full-screen">
          <h1>TAP TURN SWIPE</h1>
          <button onClick={setGameStart} className="startButton">
            START
          </button>
        </div>
      )}
      {gameState === states.playing && (
        <GameBoard
          key={score}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          randomColorStyles={randomColorStyles}
          currentAction={currentAction}
          setScore={setScore}
          gameState={gameState}
          setGameEnd={setGameEnd}
        />
      )}
      {gameState === states.ended && (
        <div className="flex-center-column full-screen">
          <h3>SCORE: {score}</h3>
          <button onClick={restartGame} className="startButton">
            PLAY AGAIN
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
