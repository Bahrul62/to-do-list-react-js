import "./App.css";
// import { getMovieList, getMovieSearch } from "./api";
// import { useEffect } from "react";
import { useState } from "react";
import PopularMovieList from "./components/movie-wrapper";
import Search from "./components/search-input";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Toko Film</h1>
        <Search />
        <div className="Movie-container">
          <PopularMovieList />
        </div>
      </header>
    </div>
  );
};

export default App;
