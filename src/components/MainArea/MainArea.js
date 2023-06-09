import { useEffect, useState } from "react";
import axios from "axios";

import MovieCard from "../MovieCard/MovieCard";
import "./MainArea.css";

const MainArea = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/3/movie/popular?api_key=${process.env.REACT_APP_MY_API_KEY}`
      )
      .then((response) => {
        setPopularMovieData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const ratingFilter = (rating) => {
    if (rating >= 7.5) {
      return "ratingClass-green";
    } else if (rating < 7.5 && rating >= 5.5) {
      return "ratingClass-orange";
    } else {
      return "ratingClass-red";
    }
  };
  return (
    <div className="MainArea">
      {popularMovieData.length ? (
        popularMovieData.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              img={`${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}`}
              movieTitle={movie.original_title}
              rating={movie.vote_average}
              description={movie.overview}
              ratingClass={ratingFilter(movie.vote_average)}
            />
          );
        })
      ) : (
        <h3>No Movie data</h3>
      )}
    </div>
  );
};
export default MainArea;
