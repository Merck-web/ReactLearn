import React from "react";
import { MovieList } from "../components/MovieList";
import { Preloader } from "../components/Preloader/Preloader";
import { Search } from "../components/Search/Search";
class Main extends React.Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    fetch("http://www.omdbapi.com/?apikey=b9885731&s=the witcher")
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }
  searchMovies = (str, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?apikey=b9885731&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };
  render() {
    const { movies } = this.state;
    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {/* передаем функцию в компонент в пропс */}
        {movies.length ? (
          <MovieList movies={this.state.movies} />
        ) : (
          <Preloader />
        )}
      </main>
    );
  }
}

export { Main };
