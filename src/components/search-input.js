import { getMovieList, getMovieSearch } from "../api";
import { useEffect, useState } from "react";

const Search = () => {
  const [popularMovie, setPopularMovie] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovie(result);
    });
  }, []);

  const search = async (q) => {
    if (q.length > 3) {
      const query = await getMovieSearch(q);
      setPopularMovie(query.results);
    }
  };
  return (
    <input
      className="Movie-search"
      placeholder="cari"
      onChange={({ target }) => search(target.value)}
    />
  );
};
export default Search;
