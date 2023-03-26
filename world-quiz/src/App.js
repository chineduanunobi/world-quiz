import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Entry from "./containers/Entry/entry";
import {Box} from "@mui/material";
import Game from "./containers/Game/game";


function App() {
  return (
    <Box>
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
