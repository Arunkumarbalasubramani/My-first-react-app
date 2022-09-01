import { useState } from "react";
function Moviepage({movieList}){


    return(
      <div className="movie-app">
     
        <section className="movies-list">
        {movieList.map((element) => (
            <Movie
              name={element.name}
              rating={element.rating}
              poster={element.poster}
              summary={element.summary}
            />
          ))}
     
        </section>
      </div>
    )
  }

  function Movie(props) {
    return (
      <div className="movie-container">
        <img className="movie-poster" src={props.poster} alt="" />
        <div className="movie-specs">
          <h3 className="movie-name">{props.name} </h3>
          <p className="movie-rating">{props.rating}</p>
        </div>
        <div className="movie-summary">
          <p className="movie-summary">{props.summary}</p>
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

  export{Counter,Movie, Moviepage }