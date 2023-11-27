import Genre from './Genre';
import Platform from './Platform';
import Publisher from './Publisher';

interface Game {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
  slug: string;
  parent_platforms: { platform: Platform }[];
  publishers: Publisher[];
  metacritic: number;
  genres: Genre[];
  rating_top: number;
}

export default Game;
