import { useState, useNavigate } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function AddMovie({ movieList, setMovieList }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  return (
    <div className="add-movie-form">
      <h1> You can Add Movies Here 🎉 🎊 🎊 </h1>
      <div className="input-fields">
        <TextField
          onChange={(event) => setName(event.target.value)}
          id="outlined-basic"
          label="Movie-Name"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setRating(event.target.value)}
          id="outlined-basic"
          label="Rating"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setPoster(event.target.value)}
          id="outlined-basic"
          label="Poster"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setSummary(event.target.value)}
          id="outlined-basic"
          label="Movie-Summary"
          variant="outlined"
        />
        <TextField
          onChange={(event) => setTrailer(event.target.value)}
          id="outlined-basic"
          label="Trailer"
          variant="outlined"
        />

        <Button
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
              trailer: trailer,
            };
            setMovieList([...movieList, newMovie]);
          }}
          variant="contained"
        >
          Add Movie
        </Button>
      </div>
    </div>
  );
}
