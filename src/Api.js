import axios from "axios";

export const getMovieList = async() => {
    const movie = await axios.get(
        `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY  }`
    )
    // console.log({movieList: movie});
    return movie.data.results
}

export const searchMovie = async (q) => {
    const search = await axios.get(
        `${process.env.REACT_APP_BASEURL}/search/movie?query=${q}&api_key=${process.env.REACT_APP_APIKEY  }`
    );
    // console.log(q);
    return search.data
}
