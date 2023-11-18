import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
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
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
