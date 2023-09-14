import logo from '../assets/Logo.png';
import search from '../assets/Search.png';
import tv from '../assets/tv.png';
import menu from '../assets/Menu.png';
import imdb from '../assets/imdb.png';
import { Play } from '../svgFiles';
import { useFetch } from '../hooks/useFetch';
import { useEffect, useState, useMemo } from 'react';

const Header = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const queryKey = ['customGetData'];
  const { data } = useFetch(queryKey);
  const randomMovieInfo = useMemo(() => {
    const randomIndex = Math.floor(
      Math.random() * (data?.results?.length || 0)
    );
    const randomMovie = data?.results?.[randomIndex];

    return {
      randomIndex,
      randomMovie,
    };
  }, [data]);
  const { randomMovie } = randomMovieInfo;
  const posterPath = randomMovie?.poster_path;
  const title = randomMovie?.title;
  const voteAverage = randomMovie?.vote_average;
  const overview = randomMovie?.overview;

  const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/original/';
  const fullPosterUrl = BASE_POSTER_URL + posterPath;
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const showAnotherLogo = screenWidth < 64 * 10;
  return (
    <header
      style={{
        height: '600px',
        width: '100%',
        backgroundImage: `url(${fullPosterUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="px-3 md:px-4 xl:px-[95px]">
        <div className="h-20 flex items-center justify-between">
          {showAnotherLogo ? (
            <img src={tv} alt="mobile logo" />
          ) : (
            <img src={logo} alt="logo" />
          )}
          <div className="flex-[0.9] flex items-center justify-between px-1.5 py-1.5 rounded-md border-[rgba(209, 213, 219, 1)] border-2 border-solid sm:flex-none w-[45%] px-2.5">
            <input
              className="bg-transparent flex-1 outline-0 border-0 placeholder:text-white placeholder:text-xs md:placeholder:text-lg"
              type="text"
              name=""
              placeholder="What do you want to watch?"
            />
            <img src={search} alt="search" />
          </div>
          <div className="flex items-center gap-[27px]">
            <p className="hidden md:block text-white">Sign in</p>
            <img src={menu} alt="menu" />
          </div>
        </div>
        <div className="w-full mt-[98px] text-white sm:w-[404px]">
          <h3 className="text-4xl sm:text-5xl">{title}</h3>
          <div className="flex items-center gap-[10px] mt-4">
            <img src={imdb} alt="imdb" />
            <p>{voteAverage} / 10</p>
          </div>
          <p className="my-4">{overview}</p>
          <button
            className="bg-[#BE123C] flex items-center px-4 py-[6px] gap-2"
            type="button"
          >
            <Play />
            <span className="uppercase">Watch trailer</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
