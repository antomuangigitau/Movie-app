import { BsDot } from 'react-icons/bs';
import Button from './Button';
import ArrowDown from '../assets/Expand Arrow.png';
import OptionButton from './OptionButton';
import TwoTickets from '../assets/Two Tickets.png';
import List from '../assets/List.png';
import star from '../assets/Star.png';
import Loading from './Loading';

interface MainProps {
  data: MovieData | null;
  isLoading: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error?: any;
}

const Main = ({ data, isLoading, error }: MainProps) => {
  const posterPath = data?.poster_path;
  const title = data?.title;
  const release_date = new Date(data?.release_date);
  const overview = data?.overview;
  const runtime = data?.runtime;
  const inputDate = new Date(release_date);
  const formattedDate = inputDate.toUTCString();
  const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/original/';
  const fullPosterUrl = BASE_POSTER_URL + posterPath;
  if (isLoading) {
    return <Loading />;
  }
  if (error) return <p>An error occurred when fetching data</p>;
  return (
    <div className="flex-1 mt-[18px] mb-5 px-3 mr-0 md:mt-[38px] md:px-0 md:mr-[51px]">
      <div className="w-full h-[449px]">
        <img
          className="w-full h-full object-cover rounded-[20px]"
          src={fullPosterUrl}
          alt={title}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-[34px] gap-[26px]">
        <div className="col-span-1 lg:col-span-2">
          <div className="flex flex-col gap-[17px] sm:flex-row justify-between">
            <div className="text-movie-text-color text-sm flex items-center py-3 sm:text-[23px]">
              <p data-testid="movie-title">{title}</p>
              <BsDot />
              <p>PG-13</p>
              <BsDot />
              <p data-testid="movie-runtime">{runtime}</p>
            </div>
            <div className="flex items-center gap-[11px]">
              <Button>Action</Button>
              <Button>Drama</Button>
            </div>
          </div>
          <p
            className="text-stars-text-color text-lg"
            data-testid="movie-release-date"
          >
            {formattedDate}
          </p>
          <p data-testid="movie-overview" className="mb-9">
            {overview}
          </p>
          <div className="isParagraph">
            <p className="text-xl text-blacklike-text-color">
              Director:{' '}
              <span className="text-stars-text-color">Joseph Kosinski</span>
            </p>
            <p className="text-xl text-blacklike-text-color">
              Writers:{' '}
              <span className="text-stars-text-color">
                Jim Cash, Jack Epps Jr, Peter Craig
              </span>
            </p>
            <p className="text-xl text-blacklike-text-color">
              Stars:{' '}
              <span className="text-stars-text-color">
                Tom Cruise, Jennifer Connelly, Miles Teller
              </span>
            </p>
          </div>
          <div className="flex flex-col pr-0 sm:flex-row justify-between sm:items-center border border-button-bg-color rounded-[10px] sm:pr-5">
            <div className="bg-stars-text-color px-5 py-3 rounded-[10px]">
              <p className="text-white">Top rated movie #65</p>
            </div>
            <div className="flex flex-none flex-col justify-center sm:flex-[0.9] sm:flex-row items-center sm:justify-between">
              <p>Award 9 nominations</p>
              <img src={ArrowDown} alt="arrow down" />
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-5 justify-start lg:justify-end">
            <img src={star} alt="star" />
            <p>8.5 | 3.5k</p>
          </div>
          <OptionButton className="bg-stars-text-color text-white">
            <img src={TwoTickets} alt="two tickets" />
            See Showtimes
          </OptionButton>
          <OptionButton className="bg-no-help-color text-blacklike-text-color border border-stars-text-color mt-3">
            <img src={List} alt="list" />
            More watch options
          </OptionButton>
        </div>
      </div>
    </div>
  );
};
export default Main;
