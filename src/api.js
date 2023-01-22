import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const getMovieList = async () => {
  const movie = await axios.get(
    `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
  );
  return movie.data.results;
};
export const getMovieSearch = async (q) => {
  const search = await axios.get(
    `${baseUrl}/search/movie?query=${q}&page=!&api_key=${apiKey}`
  );
  return search.data;
  // console.log();
};
