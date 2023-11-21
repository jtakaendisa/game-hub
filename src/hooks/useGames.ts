import { QueryFunctionContext, QueryKey, useInfiniteQuery } from 'react-query';
import { GameQuery } from '../App';
import APIClient, { FetchResponse } from '../services/api-client';
import { Genre } from './useGenres';
import { Platform } from './usePlatforms';

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

const useGames = (gameQuery: GameQuery) => {
  const fetchData = ({ pageParam = 1 }: QueryFunctionContext<QueryKey, any>) =>
    apiClient.getAll({
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
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
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
};

export default useGames;
