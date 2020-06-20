import React, { useEffect } from "react";
import styled from "styled-components";
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

export default function Loading({ setGameStart }) {
  const countdown = useCountDown(3);
  useEffect(() => {
    if (countdown === -1) {
      setGameStart();
    }
  }, [countdown, setGameStart]);

  return (
    <LoadingContainer countdown={countdown}>
      <h1>{!!countdown ? countdown : "GO!"}</h1>
      {/* <AudioPlayer source={countdown} /> */}
    </LoadingContainer>
  );
}
