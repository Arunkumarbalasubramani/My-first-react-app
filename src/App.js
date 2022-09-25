import "./App.css";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { AddColor } from "./color-game.js";
import { Moviepage } from "./MoviesList";
import { Home } from "./Home";
import { useState } from "react";
import Button from "@mui/material/Button";
import { AddMovie } from "./AddMovie";
import { Marvel } from "./marvel";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import * as React from "react";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

import { EditMovie } from "./EditMovie";
import { NotFound } from "./NotFound-Page";
import { MovieDetails } from "./movie-info";

function App() {
  const navigate = useNavigate();
  const styles = {
    minHeight: "100vh",
  };
  const [mode, setMode] = useState("dark");
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} square style={styles}>
        <div className="App">
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/films")}>
                Tamil Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movies{" "}
              </Button>
              {/* <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button> */}

              <Button
                color="inherit"
                onClick={() => navigate("/marvel-movies")}
              >
                Marvel Movies
              </Button>
              <Button color="inherit" onClick={() => navigate("/*")}>
                404-Page
              </Button>
              <Button
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                color="inherit"
                onClick={() => setMode(mode === "dark" ? "light" : "dark")}
              >
                {mode === "dark" ? "Light" : " Dark "} Mode
              </Button>
            </Toolbar>
          </AppBar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/films" element={<Navigate replace to="/movies" />} />
            <Route path="/movies" element={<Moviepage />} />

            {/* <Route path="/color-game" element={<AddColor />} /> */}
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route
              path="*"
              element={<Navigate replace to="/404-not-found" />}
            />
            <Route path="/404-not-found" element={<NotFound />} />
            <Route path="/marvel-movies" element={<Marvel />} />

            <Route path="/movies/edit-movie/:id" element={<EditMovie />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
