/* eslint-disable no-useless-catch */
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useFetch = (queryKey: string[], movieId?: number) => {
  const baseUrl = 'https://api.themoviedb.org/3/movie/';
  const API_KEY = import.meta.env.VITE_API_KEY;
  const url = movieId ? `${baseUrl}${movieId}` : `${baseUrl}popular`;
  const options = {
    method: 'GET',
    url: `${url}?api_key=${API_KEY}`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTRhNjMxNWJhMmNkODRhMGEyNzg4NGFmOGQwNmMzMCIsInN1YiI6IjY0ZmVjMzczZWZlYTdhMDBmZDFhOTNhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uSFIUzUqUg_nlvf1A8gIKCOC_Se1W7XT4eW8cAa4JM0',
    },
  };

  const fetchData = async () => {
    try {
      const response = await axios(options);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery(queryKey, fetchData);

  return { data, isLoading, error };
};
