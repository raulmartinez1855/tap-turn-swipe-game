import React, { useState } from "react";
import GameBoard from "./GameBoard";
import styled from "styled-components";

const states = { start: "start", playing: "playing", ended: "ended" };
const gameOptions = ["swipe", "tap", "turn"];

const StartButton = styled.button`
  color: white;
  border: 1px solid white;
  padding: 10px;
  background: black;
  font-family: "Archivo Black";
`;

const FullScreenFlexCenter = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState(states.start);
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

  return (
    <div className="app">
      {gameState === states.start && (
        <FullScreenFlexCenter>
          <h1>TAP TURN SWIPE</h1>
          <StartButton onClick={setGameStart} className="startButton">
            START
          </StartButton>
        </FullScreenFlexCenter>
      )}
      {gameState === states.playing && (
        <GameBoard
          key={score}
          sliderValue={sliderValue}
          setSliderValue={setSliderValue}
          score={score}
          currentAction={currentAction}
          setScore={setScore}
          gameState={gameState}
          setGameEnd={setGameEnd}
        />
      )}
      {gameState === states.ended && (
        <FullScreenFlexCenter>
          <h3>SCORE: {score}</h3>
          <StartButton onClick={restartGame}>PLAY AGAIN</StartButton>
        </FullScreenFlexCenter>
      )}
    </div>
  );
}

export default App;
