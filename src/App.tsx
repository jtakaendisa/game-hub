import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const gridTemplateBase = `
    "nav"
    "main"
  `;

  const gridTemplateLarge = `
  "nav nav"
  "aside main"
`;

  return (
    <div>
      <Grid
        templateAreas={{
          base: gridTemplateBase,
          lg: gridTemplateLarge,
        }}
        templateColumns={{
          base: '1fr',
          lg: '12.5rem 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid selectedGenre={selectedGenre} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
