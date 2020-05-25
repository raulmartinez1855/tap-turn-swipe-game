import React, { useEffect } from "react";
import useCountDown from "../hooks/useCountDown";

export default function GameBoard({
  randomColorStyles,
  currentAction,
  setScore,
  setGameEnd,
  setSliderValue,
  sliderValue
}) {
  const countdown = useCountDown(2);

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
    <div
      onClick={() => handleStateChange("tap", currentAction)}
      className="flex-center-column full-screen"
      style={randomColorStyles}
    >
      <h1>{currentAction.toUpperCase()}</h1>
    </div>
  );
}
