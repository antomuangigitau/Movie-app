import { useFetch } from '../hooks/useFetch';
import imdb from '../assets/imdb.png';
import { Link } from 'react-router-dom';
import { Heart } from '../svgFiles';

const Card = () => {
  const queryKey = ['customGetData'];
  const { data, isLoading, error } = useFetch(queryKey);
  if (isLoading) return <p>Loading ...</p>;
  if (error) return <p>An error occurred when fetching data</p>;
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-11 lg:grid-cols-4"
      data-testid="movie-card"
    >
      {data?.results.slice(0, 11).map((movie: Movie) => {
        const {
          id,
          poster_path: posterPath,
          title,
          vote_average,
          release_date,
        } = movie;
        const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/original/';
        const fullPosterUrl = BASE_POSTER_URL + posterPath;
        const inputDate = new Date(release_date);
        const formattedDate = inputDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

        return (
          <div className="relative w-full lg:w-[250px]" key={id}>
            <div className="w-[30px] h-[30px] flex items-center justify-center bg-fill-color absolute top-3 right-3 rounded-full">
              <Heart />
            </div>
            <Link to={`movies/${id}`}>
              <img
                className="w-full"
                data-testid="movie-poster"
                src={fullPosterUrl}
                alt={title}
              />
              <h2 className="text-lg mt-6 mb-3" data-testid="movie-title">
                {title}
              </h2>
            </Link>
            <div className="flex items-center gap-[10px]">
              <img src={imdb} alt="imdb" />
              <p>{vote_average} / 10</p>
            </div>
            <p data-testid="movie-release-date">{formattedDate}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
