import "./App.css";
import Controller from "./components/Controller.js";
import Typography from "@mui/material/Typography";
import TrackList from "./components/TrackList";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <div className="container">
        <Typography variant="h4" sx={{ pt: 6, mb: 3, color: "black" }}>
          Tracklist
        </Typography>
        <TrackList />
        <div>
          <Controller />
        </div>
      </div>
    </MusicPlayerProvider>
  );
}

export default App;
