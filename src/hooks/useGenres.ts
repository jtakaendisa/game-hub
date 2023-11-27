import ms from 'ms';
import { useQuery } from 'react-query';
import genres from '../data/genres';
import APIClient, { FetchResponse } from '../services/api-client';
import Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  });

export default useGenres;
