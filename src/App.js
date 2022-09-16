import "./App.css";
import { useEffect } from "react";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AddColor } from "./color-game.js";
import { Moviepage } from "./MoviesList";
import { Home } from "./Home";
import { useState } from "react";
import { useParams } from "react-router-dom";
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
import { Basicform } from "./Basicform";
import { EditMovie } from "./EditMovie";

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
                Movies App
              </Button>
              <Button color="inherit" onClick={() => navigate("/movies/add")}>
                Add Movies{" "}
              </Button>
              <Button color="inherit" onClick={() => navigate("/color-game")}>
                Color Game
              </Button>
              <Button color="inherit" onClick={() => navigate("/*")}>
                404-Page
              </Button>
              <Button
                color="inherit"
                onClick={() => navigate("/marvel-movies")}
              >
                Marvel Movies
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

            <Route path="/color-game" element={<AddColor />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
            <Route path="/movies/add" element={<AddMovie />} />
            <Route
              path="*"
              element={<Navigate replace to="/404-not-found" />}
            />
            <Route path="/404-not-found" element={<NotFound />} />
            <Route path="/marvel-movies" element={<Marvel />} />
            <Route path="/basicform" element={<Basicform />} />
            <Route path="/movies/edit-movie/:id" element={<EditMovie />} />
          </Routes>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

function NotFound() {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/62549/screenshots/3894903/media/c3a11496923b170c18c947fe93d13261.gif"
        alt="page-not-found"
        className="not-found"
      />
    </div>
  );
}
function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(`https://6321301b82f8687273adc273.mockapi.io/movie/${id}`)
      .then((response) => response.json())
      .then((mv) => setMovie(mv));
  }, []);

  // const movie = movieList[id];
  const styles = {
    color: movie.rating > 8 ? "green" : "red",
  };

  return (
    <div>
      <h1>Movie Details of {movie.name} .... 🎉🎉🎉</h1>
      <div className="movie-container-info">
        <iframe
          width="100%"
          height="600"
          src={movie.trailer}
          title={movie.name}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="movie-specs">
          <h3 className="movie-name">{movie.name} </h3>
          <p style={styles} className="movie-rating">
            {movie.rating}✪
          </p>
        </div>
        <div className="movie-summary">
          <p className="movie-summary">{movie.summary} </p>
        </div>
        <Button variant="contained" onClick={() => navigate("/movies")}>
          Back
        </Button>
      </div>
    </div>
  );
}
export default App;
