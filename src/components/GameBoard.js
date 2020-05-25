import React, { useEffect } from "react";
import useCountDown from "../hooks/useCountDown";
import styled from "styled-components";

const Slider = styled.input`
  -webkit-appearance: none;
  margin: 18px 0;

  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-webkit-slider-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -14px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: #367ebd;
  }
  &::-moz-range-track {
    height: 8.4px;
    cursor: pointer;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    background: #3071a9;
    border-radius: 1.3px;
    border: 0.2px solid #010101;
  }
  &::-moz-range-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &::-ms-track {
    height: 8.4px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    border-width: 16px 0;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: #2a6495;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-fill-upper {
    background: #3071a9;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  }
  &::-ms-thumb {
    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    border: 1px solid #000000;
    height: 36px;
    width: 16px;
    border-radius: 3px;
    background: #ffffff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: #3071a9;
  }
  &:focus::-ms-fill-upper {
    background: #367ebd;
  }
`;

const GameBoardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ score }) => (score % 2 === 0 ? "black" : "white")};
  color: ${({ score }) => (score % 2 !== 0 ? "black" : "white")};
`;

export default function GameBoard({
  score,
  currentAction,
  setScore,
  setGameEnd,
  setSliderValue,
  sliderValue
}) {
  const amountOfTime = 5 - score > 2 ? 5 - score : 2;

  const countdown = useCountDown(amountOfTime);

  const handleStateChange = (actionFired, correctAction, slideValue = null) => {
    if (actionFired !== correctAction) setGameEnd();
    else setScore(score => score + 1);
    if (slideValue) setSliderValue(slideValue);
  };

  useEffect(() => {
    const handleResize = () => {
      if ("turn" !== currentAction) setGameEnd();
      else setScore(score => score + 1);
    };

    window.addEventListener("resize", handleResize);
    if (countdown === 0) setGameEnd();
    return () => window.removeEventListener("resize", handleResize);
  }, [countdown, setGameEnd, currentAction, setScore]);

  return (
    <GameBoardContainer
      score={score}
      onClick={() => handleStateChange("tap", currentAction)}
    >
      <h1>{currentAction.toUpperCase()}</h1>
      <Slider
        onChange={e =>
          handleStateChange("swipe", currentAction, e.target.value)
        }
        type="range"
        min="1"
        max="2"
        value={sliderValue}
      />
    </GameBoardContainer>
  );
}
