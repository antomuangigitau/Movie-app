import { useParams } from 'react-router-dom';
import Aside from '../components/Aside';
import Main from '../components/Main';
import { useFetch } from '../hooks/useFetch';
const Movie = () => {
  const { id } = useParams();

  const queryKey = ['GetMovieData'];
  const { data, isLoading, error } = useFetch(queryKey, Number(id));

  return (
    <section className="flex gap-0 md:gap-[37px]">
      <Aside />
      <Main data={data} isLoading={isLoading} error={error} />
    </section>
  );
};
export default Movie;
