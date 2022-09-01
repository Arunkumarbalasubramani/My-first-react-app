
import "./App.css";

import { Routes, Route, Link } from "react-router-dom";
import {  AddColor,ColorBox } from "./color-game.js";
import { Counter,Movie, Moviepage  } from "./MoviesList";
import { Home } from "./Home";

function App() {
  const movieList = [
    {

      name: "Vikram",
      poster:
      "https://m.media-amazon.com/images/M/MV5BMmJhYTYxMGEtNjQ5NS00MWZiLWEwN2ItYjJmMWE2YTU1YWYxXkEyXkFqcGdeQXVyMTEzNzg0Mjkx._V1_.jpg",
      rating: 8.4,
      summary:
      "Members of a black ops team must track and eliminate a gang of masked murderers.",
      
      },
      {
        name: "RRR",
        poster:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
        rating: 8.8,
        summary:
        "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
        
        },
        {
          name: "Iron man 2",
          poster:
          "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
          rating: 7,
          summary:
          "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
          
          },
          {
            name: "The Avengers",
            rating: 8,
            summary:
            "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
            poster:
            "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
            
            },
          {
            name: "Jai Bhim",
            poster:
            "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
            summary:
            "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
            rating: 8.8,
            
            },
            {
              name: "Ratatouille",
              poster:
              "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
              rating: 8,
              summary:
              "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
              
              },

   
    {
      name: "Interstellar",
      rating: "8.6 ⭐",
      poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      summary:
        "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    },
    {
      name: "Justice league",
      rating: "6.1⭐",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/91JNWWQKGgL._RI_.jpg",
      summary:
        "Steppenwolf and his Parademons return after eons to capture Earth. However, Batman seeks the help of Wonder Woman to recruit and assemble Flash, Cyborg and Aquaman to fight the powerful new enemy.",
    },
    {
      name: "Inception",
      rating: "8.8 ⭐",
      poster: "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg",
      summary:
        "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobbs criminal history as payment for performing an inception on his sick competitors son.",
    },
    {
      name: "Arjun Reddy",
      rating: "8.1 ⭐",
      poster:
        "https://images-na.ssl-images-amazon.com/images/I/91X1PmwPjkL._RI_.jpg",
      summary:
        "Arjun Reddy Deshmukh is a young surgeon with functioning alcoholism and a furious temper. He spirals into self-destruction when he learns that his girlfriend is marrying another man.",
    },
    {
      name: "Master",
      rating: "7.8 ⭐",
      poster:
        "https://i2.wp.com/www.socialnews.xyz/wp-content/uploads/2020/03/14/Thalapathy-vijay-s-Master-movie-3rd-single-Vaathi-Raid-will-be-out-today-at-8-30PM-.jpg?quality=90&zoom=1&ssl=1",
      summary:
        "JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
    },
    {
      name: "Justice league: Snyders Cut",
      rating: "7.8 ⭐",
      poster:
        "https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
      summary:
        "Bruce Wayne and  Diana Prince plans to recruit a team of metahumans to protect the world from an approaching threat of Darkseid. The task proves more difficult than Bruce imagined, as each of the recruits must face the demons of their own pasts. United ; Batman, Wonder Woman, Aquaman, Cyborg and the Flash must save the planet from Steppenwolf, DeSaad and Darkseid and their dreadful intentions",
    },
  ];
  return (
    <div className="App">

      <ul>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/movies">Movies App</Link> </li>
        <li><Link to="/color-game">Color Game</Link></li>
 
      </ul>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Moviepage movieList ={movieList} />} />
        <Route path="/color-game" element={<AddColor />} />
      </Routes>
   

   
    </div>
  );
}


export default App;
