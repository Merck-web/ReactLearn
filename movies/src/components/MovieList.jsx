import { Movie } from "./Movie/Movie";
function MovieList(props) {
  const { movies } = props;
  return (
    <div className='movies'>
      {movies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}
export { MovieList };
