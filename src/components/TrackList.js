import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function TrackList() {
  const { trackList, playTrack } = useMusicPlayer();
  return (
    <Box
      sx={{
        width: 1,
        height: 2 / 3,
      }}
    >
      {trackList.map((track, index) => (
        <Button
          variant="text"
          sx={{
            fontSize: "medium",
            textAlign: "center",
            width: 1,
            my: 1,
            color: "black",
            textTransform: "none",
            display: "flex",
            flexDirection: "column",
          }}
          onClick={() => playTrack(index)}
        >
          {track.title}
          <Typography variant="caption" display="block">
            {track.artistName}
          </Typography>
        </Button>
      ))}
    </Box>
  );
}

export default TrackList;
