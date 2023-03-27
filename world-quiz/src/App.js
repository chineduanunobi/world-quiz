import React, {useEffect, useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Entry from "./containers/Entry/entry";
import {Box} from "@mui/material";
import Game from "./containers/Game/game";
import {PlayerContext} from "./containers/Game/PlayerContext";


function App() {

  useEffect(() => {
    document.title = "World Countries Quiz - Home";
  }, []);

  //sets timer and score to each player
  const [counter, setCounter] = useState(1080);

  return (
    <Box>
    <Router>
      <Routes>
        <Route path="/" element={<Entry />} />
        <Route path="/game" element={<PlayerContext.Provider
            value={{ counter, setCounter }}
        ><Game /> </PlayerContext.Provider>} />
      </Routes>
    </Router>
    </Box>
  );
}

export default App;
