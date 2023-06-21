import { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Row, Col } from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import "./MainArea.css";

const MainArea = () => {
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [comedieMovies, setComedieMovies] = useState([]);
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/3/movie/popular?api_key=${process.env.REACT_APP_MY_API_KEY}`
      )
      .then((response) => {
        setPopularMovieData(response.data.results);
        console.log(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
      });
    axios
      .get(
        `${process.env.REACT_APP_API_URL}/3/discover/movie?api_key=${process.env.REACT_APP_MY_API_KEY}&with_genres=35`
      )
      .then((response) => {
        setComedieMovies(response.data.results);
        console.log(response.data.results);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
        setError(true);
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
      {!isLoading ? (
        error ? (
          <h3 className="error">Server error! Please try again.</h3>
        ) : (
          <div className="carousel-div">
            <Carousel className="carousel">
              {popularMovieData.map((movie, index) => {
                if (index % 4 === 0) {
                  // Kreira novi red za svaki četvrti film
                  const moviesForRow = popularMovieData.slice(index, index + 4);

                  return (
                    <Carousel.Item className="carousel-item">
                      <Row className="carousel-row">
                        {moviesForRow.map((movie) => (
                          <Col key={movie.id} sm={3}>
                            <MovieCard
                              img={`${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}`}
                              movieTitle={movie.original_title}
                              rating={movie.vote_average}
                              description={movie.overview}
                              ratingClass={ratingFilter(movie.vote_average)}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  );
                } else {
                  return null; // Povratak null za ostale filmove koji nisu na početku reda
                }
              })}
            </Carousel>
            <Carousel className="carousel">
              {comedieMovies.map((movie, index) => {
                if (index % 4 === 0) {
                  // Kreira novi red za svaki četvrti film
                  const moviesForRow = comedieMovies.slice(index, index + 4);

                  return (
                    <Carousel.Item className="carousel-item">
                      <Row className="carousel-row">
                        {moviesForRow.map((movie) => (
                          <Col key={movie.id} sm={3}>
                            <MovieCard
                              img={`${process.env.REACT_APP_IMG_URL}${movie.backdrop_path}`}
                              movieTitle={movie.original_title}
                              rating={movie.vote_average}
                              description={movie.overview}
                              ratingClass={ratingFilter(movie.vote_average)}
                            />
                          </Col>
                        ))}
                      </Row>
                    </Carousel.Item>
                  );
                } else {
                  return null; // Povratak null za ostale filmove koji nisu na početku reda
                }
              })}
            </Carousel>
          </div>
        )
      ) : (
        <h3 className="loading">Loading...</h3>
      )}
    </div>
  );
};
export default MainArea;
