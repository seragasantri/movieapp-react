import { useEffect, useState } from "react";
import "./App.css";
import { getMovieList, searchMovie } from "./Api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    getMovieList().then((results) => {
      setPopularMovies(results);
    });
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div className="movie-wrapper" key={i}>
            <div className="movie-title">{movie.title}</div>
            <LazyLoadImage  loading="lazy" className="movie-image" src={`${process.env.REACT_APP_BASEIMGURL}w500/${movie.poster_path}`} />
            <div className="movie-date">Release: {movie.release_date}</div>
            <div className="movie-rate">Rate: {movie.vote_average}</div>
          </div>
      )
    })
  }
  const search = async (q) => {

    const query = await searchMovie(q)
    setPopularMovies(query.results)
    // console.log({ query: query });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>REACT MOVIE APP</h1>
        <input
          className="movie-search"
          placeholder="Cari Film Kesayangan ..."
          onChange={({ target }) => search(target.value)}
        />
        <div className="movie-container">
          <PopularMovieList/>
        </div>
      </header>
    </div>
  );
};

export default App;
