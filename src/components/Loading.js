import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import useCountDown from "../hooks/useCountDown";
import AudioPlayer from "./AudioPlayer";

const LoadingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: ${({ countdown }) => (countdown % 2 === 0 ? "white" : "black")};
  color: ${({ countdown }) => (countdown % 2 !== 0 ? "white" : "black")};
`;

const grow = keyframes`
  from {
    transform: scale(.8);
  }

  to {
    transform: scale(1);
  }
`;

const LargeNumber = styled.h1`
  font-size: 10rem;
  animation: ${grow} 90ms ease-out;
`;

export default function Loading({ setGameStart }) {
  const countdown = useCountDown(3);
  useEffect(() => {
    if (countdown === -1) {
      setGameStart();
    }
  });

  // messy I know, was having an issue where audio wasnt changing, quick fix for now
  return (
    <LoadingContainer countdown={countdown}>
      {countdown === 3 && (
        <>
          <LargeNumber>{countdown}</LargeNumber>
          <AudioPlayer source={countdown} />
        </>
      )}
      {countdown === 2 && (
        <>
          <LargeNumber>{countdown}</LargeNumber>
          <AudioPlayer source={countdown} />
        </>
      )}
      {countdown === 1 && (
        <>
          <LargeNumber>{countdown}</LargeNumber>
          <AudioPlayer source={countdown} />
        </>
      )}
      {countdown === 0 && (
        <>
          <LargeNumber>GO!</LargeNumber>
          <AudioPlayer source={countdown} />
        </>
      )}
    </LoadingContainer>
  );
}
