import React, { useEffect } from 'react';
import useCountDown from '../hooks/useCountDown';
import styled from 'styled-components';

const GameBoardContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ score }) => (score % 2 === 0 ? 'black' : 'white')};
  color: ${({ score }) => (score % 2 !== 0 ? 'black' : 'white')};
`;

export default function GameBoard({
  score,
  currentAction,
  setScore,
  setGameEnd,
  setSliderValue,
  sliderValue,
}) {
  const amountOfTime = 5 - score > 2 ? 5 - score : 2;

  const countdown = useCountDown(amountOfTime);

  const handleStateChange = (actionFired, correctAction, slideValue = null) => {
    if (actionFired !== correctAction) setGameEnd();
    else setScore((score) => score + 1);
    if (slideValue) setSliderValue(slideValue);
  };

  useEffect(() => {
    const handleResize = () => {
      if ('turn' !== currentAction) setGameEnd();
      else setScore((score) => score + 1);
    };

    window.addEventListener('resize', handleResize);
    if (countdown === 0) setGameEnd();
    return () => window.removeEventListener('resize', handleResize);
  }, [countdown, setGameEnd, currentAction, setScore]);

  return (
    <GameBoardContainer
      score={score}
      onClick={() => handleStateChange('tap', currentAction)}
    >
      <h1>{currentAction.toUpperCase()}</h1>
      <input
        onChange={(e) =>
          handleStateChange('swipe', currentAction, e.target.value)
        }
        type="range"
        min="1"
        max="2"
        value={sliderValue}
      />
    </GameBoardContainer>
  );
}
