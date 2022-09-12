import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Switch from "@mui/material/Switch";

function Moviepage({ movieList }) {
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
              id={index}
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
  const label = { inputProps: { "aria-label": "Switch demo" } };
  return (
    <div className="movie-container">
      <img className="movie-poster" src={props.poster} alt="" />
      <div className="movie-specs">
        <h3 className="movie-name">
          {props.name}{" "}
          <Switch
            {...label}
            onClick={() => {
              setShow(!show);
            }}
            defaultChecked
          />
          <Button
            onClick={() => navigate(`/movies/${props.id}`)}
            variant="outlined"
          >
            Info
          </Button>
        </h3>
        <p style={styles} className="movie-rating">
          {props.rating}✪
        </p>
      </div>
      <div className="movie-summary">
        {show ? <p className="movie-summary">{props.summary} </p> : null}
      </div>
      <Counter />
    </div>
  );
}

function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  return (
    <div className="counter-container">
      <button className="like" onClick={() => setLike(like + 1)}>
        👍 <span>{like}</span>
      </button>
      <button className="dislike" onClick={() => setDisLike(disLike + 1)}>
        👎 <span>{disLike}</span>
      </button>
    </div>
  );
}

export { Counter, Movie, Moviepage };
