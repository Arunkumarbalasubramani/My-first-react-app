import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import * as React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { API } from "./global";

export function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const [backIcon, setBackIcon] = useState(false);
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
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
        <Button
          variant="contained"
          onClick={() => navigate("/movies")}
          onMouseEnter={() => setBackIcon(true)}
          onMouseLeave={() => setBackIcon(false)}
        >
          {backIcon ? <ArrowBackIcon /> : "Back"}
        </Button>
      </div>
    </div>
  );
}
