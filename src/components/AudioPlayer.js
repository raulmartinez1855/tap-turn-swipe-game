import React from "react";

export default function AudioPlayer({ source }) {
  return (
    <audio autoPlay>
      <source src={`${source}.mp3`} type="audio/mpeg" />
    </audio>
  );
}
