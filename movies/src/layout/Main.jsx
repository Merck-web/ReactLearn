import React from "react"
import { MovieList } from "../components/MovieList"
class Main extends React.Component {
    state = {
        movies: [],
    }
    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=b9885731&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({ movies: data.Search }))
    }
    render() {
        const { movies } = this.state
        return <main className="container content">
            {
                movies.length ? (  <MovieList movies={this.state.movies} />) : <h1>Loading ...</h1>
            }

        </main>
    }
}

export { Main }