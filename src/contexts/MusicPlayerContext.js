import React, { useState } from "react";
import Track1 from "../contexts/something-about-you.mp3";
import Track2 from "../contexts/say-you-wont.mp3";
import Track3 from "../contexts/carry-me-on.mp3";
import Track4 from "../contexts/dry.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      title: "Something About You",
      artistName: "Marilyn Ford",
      file: Track1,
    },
    {
      title: "Say You Won't",
      artistName: "Marilyn Ford",
      file: Track2,
    },
    {
      title: "Carry Me On",
      artistName: "Far Hills Band",
      file: Track3,
    },
    {
      title: "Dry",
      artistName: "Isaiah Mathew",
      file: Track4,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
