import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Moviepage({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  return (
    <div className="movies">
      <div className="add-movie-form">
        <h1> You can Add Movies Here 🎉 🎊 🎊 </h1>
        <div className="input-fields">
          <input
            type="text"
            name="Movie-name"
            placeholder="Name of the Movie"
            onChange={(event) => setName(event.target.value)}
          />
          <input
            type="text"
            name="Movie-rating"
            placeholder="Rating"
            onChange={(event) => setRating(event.target.value)}
          />
          <input
            type="text"
            name="poster"
            placeholder="Poster"
            onChange={(event) => setPoster(event.target.value)}
          />
          <input
            type="text"
            name="Movie-summary"
            placeholder="summary"
            onChange={(event) => setSummary(event.target.value)}
          />
          <button
            onClick={() => {
              const newMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
              };
              setMovieList([...movieList, newMovie]);
            }}
          >
            Add Movie
          </button>
        </div>
      </div>
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

function Movie(props, id) {
  const styles = {
    color: props.rating > 8 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="movie-container">
      <img className="movie-poster" src={props.poster} alt="" />
      <div className="movie-specs">
        <h3 className="movie-name">
          {props.name}{" "}
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            Toggle Summary
          </button>
          <button onClick={() => navigate(`/movies/${id}`)}>Info</button>
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
