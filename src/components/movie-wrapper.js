import { getMovieList, getMovieSearch } from "../api";
import { useEffect } from "react";
import { useState } from "react";
const imgUrl = process.env.REACT_APP_BASEIMGURL;

const PopularMovieList = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  return popularMovie.map((movie, i) => {
    return (
      <div className="Movie-wrapper" key={i}>
        <div className="Movie-title"> {movie.title}</div>
        <img className="Movie-image" src={`${imgUrl}/${movie.poster_path}`} />
        <div className="Movie-date">Release: {movie.release_date}</div>
        <div className="Movie-rate"> {movie.vote_average}</div>
      </div>
    );
  });
};

export default PopularMovieList;
