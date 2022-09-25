import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { API } from "./global";

const editMovieValidaitonSchema = yup.object({
  name: yup.string().required("Why Not fill This Name ? 😉").min(5),
  poster: yup.string().required("Why Not fill This poster ? 😉").min(4),
  rating: yup.number().required("Why Not fill This rating ? 😉").min(0).max(10),
  summary: yup.string().required("Why Not fill This summary ? 😉").min(20),
  trailer: yup.string().required("Why Not fill This trailer  ? 😉").min(4),
});

export function EditMovie() {
  const { id } = useParams();

  const [movie, setMovie] = useState("");
  useEffect(() => {
    fetch(`${API}/movies/${id}`)
      .then((response) => response.json())
      .then((mv) => setMovie(mv));
  }, []);
  return movie ? <EditMovieFunction movie={movie} /> : " Loading .....";
}
function EditMovieFunction({ movie }) {
  const { handleSubmit, values, handleChange, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        name: movie.name,
        poster: movie.poster,
        rating: movie.rating,
        summary: movie.summary,
        trailer: movie.trailer,
      },
      validationSchema: editMovieValidaitonSchema,
      onSubmit: (editedmovie) => {
        editMovie(editedmovie);
      },
    });
  const navigate = useNavigate();

  const editMovie = async (editedmovie) => {
    await fetch(
      `https://6321301b82f8687273adc273.mockapi.io/movie/${movie.id}`,
      {
        method: "PUT",
        body: JSON.stringify(editedmovie),
        headers: {
          "Content-type": "application/json",
        },
      }
    ).then(() => navigate("/movies"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="edit-movie-form">
        <h1> Editing {movie.name} Movie 🎉 🎊 🎊 </h1>
        <div className="input-fields">
          <TextField
            error={touched.name && errors.name}
            helperText={touched.name && errors.name ? errors.name : null}
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            id="outlined-basic"
            label="Movie-Name"
            variant="outlined"
            defaultValue={movie.name}
          />

          <TextField
            name="rating"
            value={values.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            error={touched.rating && errors.rating}
            helperText={touched.rating && errors.rating ? errors.rating : null}
          />

          <TextField
            name="poster"
            value={values.poster}
            onChange={handleChange}
            onBlur={handleBlur}
            id="outlined-basic"
            label="Poster"
            variant="outlined"
            error={touched.poster && errors.poster}
            helperText={touched.poster && errors.poster ? errors.poster : null}
          />

          <TextField
            name="summary"
            value={values.summary}
            onChange={handleChange}
            onBlur={handleBlur}
            id="outlined-basic"
            label="Movie-Summary"
            variant="outlined"
            error={touched.summary && errors.summary}
            helperText={
              touched.summary && errors.summary ? errors.summary : null
            }
          />

          <TextField
            name="trailer"
            value={values.trailer}
            onChange={handleChange}
            onBlur={handleBlur}
            id="outlined-basic"
            label="Trailer"
            variant="outlined"
            error={touched.trailer && errors.trailer}
            helperText={
              touched.trailer && errors.trailer ? errors.trailer : null
            }
          />

          <Button type="submit" variant="contained">
            Edit Movie
          </Button>
        </div>
      </div>
    </form>
  );
}
