import ms from 'ms';
import { QueryFunctionContext, QueryKey, useInfiniteQuery } from 'react-query';
import APIClient, { FetchResponse } from '../services/api-client';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';
import useGameQueryStore from '../store';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);

  const fetchData = ({ pageParam = 1 }: QueryFunctionContext<QueryKey, any>) =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genreId,
        parent_platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
        page: pageParam,
      },
    });

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: fetchData,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: ms('24h'),
  });
};

export default useGames;
