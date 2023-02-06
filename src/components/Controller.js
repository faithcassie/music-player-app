import React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";
import FastForwardRounded from "@mui/icons-material/FastForwardRounded";
import FastRewindRounded from "@mui/icons-material/FastRewindRounded";
// import { useState } from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import { Typography } from "@mui/material";

function Controller() {
  const {
    currentTrackName,
    playTrack,
    isPlaying,
    currentTrackIndex,
    playNextTrack,
    playPreviousTrack,
  } = useMusicPlayer();
  console.log(currentTrackName);
  // const [paused, setPaused] = useState(false);
  const style = {
    mainIconColor: "black",
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: -1,
        }}
      >
        <IconButton aria-label="previous song">
          <FastRewindRounded
            onClick={() => playPreviousTrack()}
            fontSize="large"
            htmlColor={style.mainIconColor}
          />
        </IconButton>
        <IconButton onClick={() => playTrack(currentTrackIndex)}>
          {!isPlaying ? (
            <PlayArrowRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={style.mainIconColor}
            />
          ) : (
            <PauseRounded
              sx={{ fontSize: "3rem" }}
              htmlColor={style.mainIconColor}
            />
          )}
        </IconButton>
        <IconButton aria-label="next song">
          <FastForwardRounded
            onClick={() => playNextTrack()}
            fontSize="large"
            htmlColor={style.mainIconColor}
          />
        </IconButton>
      </Box>

      <Typography
        variant="overline"
        display="block"
        textAlign="center"
        sx={{ pb: 5 }}
      >
        {isPlaying ? currentTrackName : "NaN"}
      </Typography>
    </>
  );
}

export default Controller;
