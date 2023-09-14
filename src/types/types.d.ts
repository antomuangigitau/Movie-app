interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: date;
  vote_average: number;
}

interface MovieData
  extends Pick<
    Movie,
    | 'id'
    | 'title'
    | 'overview'
    | 'poster_path'
    | 'release_date'
    | 'vote_average'
  > {
  runtime: number;
}
interface ErrorData {
  message: string;
}
