import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Badge from "@mui/material/Badge";
import { Card } from "@mui/material";
import { API } from "./global";
import DeleteIcon from "@mui/icons-material/Delete";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import Tooltip from "@mui/material/Tooltip";

function Moviepage() {
  const [movieList, setMovieList] = useState([]);

  const navigate = useNavigate();
  const getMovies = () => {
    fetch(`${API}/movies`)
      .then((response) => response.json())
      .then((mvs) => setMovieList(mvs));
  };

  useEffect(() => {
    getMovies();
  }, []);

  const deleteMovie = (id) => {
    fetch(`${API}/movies/${id}`, {
      method: "DELETE",
    }).then(() => getMovies());
  };

  return (
    <div className="movies">
      <div className="movie-app">
        <section className="movies-list">
          {movieList.map((element, index) => (
            <Movie
              name={element.name}
              rating={element.rating}
              poster={element.poster}
              summary={element.summary}
              key={index}
              id={element._id}
              deleteBtn={
                <Tooltip title="Delete this Movie">
                  <IconButton
                    color="error"
                    aria-label="delete"
                    style={{ marginLeft: "auto" }}
                    onClick={() => {
                      deleteMovie(element._id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              }
              editbtn={
                <Tooltip title="Edit this Movie">
                  <IconButton
                    color="secondary"
                    onClick={() =>
                      navigate(`/movies/edit-movie/${element._id}`)
                    }
                    aria-label="edit-button"
                  >
                    <EditOutlinedIcon />
                  </IconButton>
                </Tooltip>
              }
            />
          ))}
        </section>
      </div>
    </div>
  );
}

function Movie(props) {
  const styles = {
    color: props.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);

  const navigate = useNavigate();

  return (
    <Card className="movie-container">
      <img className="movie-poster" src={props.poster} alt="" />
      <CardContent>
        <div className="movie-specs">
          <h3 className="movie-name">
            {props.name}{" "}
            <IconButton
              onClick={() => navigate(`/movies/${props.id}`)}
              color="primary"
              aria-label="more-movie-info"
            >
              <InfoIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                setShow(!show);
              }}
              color="primary"
              aria-label="toggle-summary-icon"
            >
              {show ? (
                <KeyboardDoubleArrowUpIcon />
              ) : (
                <KeyboardDoubleArrowDownIcon />
              )}
            </IconButton>
          </h3>
          <p style={styles} className="movie-rating">
            {props.rating}✪
          </p>
        </div>
        <div className="movie-summary">
          {show ? <p className="movie-summary">{props.summary} </p> : null}
        </div>
      </CardContent>
      <CardActions>
        {" "}
        <Counter />
        {props.deleteBtn}
        {props.editbtn}
      </CardActions>
    </Card>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div className="counter-container">
      <Badge badgeContent={like} color="primary">
        <IconButton
          onClick={() => setLike(like + 1)}
          color="primary"
          aria-label="like-Movie-button"
        >
          👍🏼
        </IconButton>
      </Badge>
      <Badge badgeContent={disLike} color="error">
        <IconButton
          onClick={() => setDisLike(disLike + 1)}
          color="error"
          aria-label="disLike-Movie-button"
        >
          {" "}
          👎🏼
        </IconButton>
      </Badge>{" "}
    </div>
  );
}

export { Counter, Movie, Moviepage };
