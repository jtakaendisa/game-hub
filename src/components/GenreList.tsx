import { Button, HStack, Heading, Image, List, ListItem } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreListItemSkeleton from './GenreListItemSkeleton';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  if (error) return null;

  return (
    <>
      <Heading fontSize="2xl" mb={3}>
        Genres
      </Heading>
      <List>
        {isLoading
          ? skeletons.map((skeleton) => <GenreListItemSkeleton key={skeleton} />)
          : data?.results.map((genre) => (
              <ListItem key={genre.id} paddingY="0.313rem">
                <HStack>
                  <Image
                    boxSize="32px"
                    borderRadius={8}
                    objectFit="cover"
                    src={getCroppedImageUrl(genre.image_background)}
                    alt={genre.name}
                  />
                  <Button
                    fontSize="lg"
                    fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
                    variant="link"
                    whiteSpace="normal"
                    textAlign="left"
                    onClick={() => onSelectGenre(genre)}
                  >
                    {genre.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
      </List>
    </>
  );
};

export default GenreList;
