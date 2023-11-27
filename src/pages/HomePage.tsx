import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

function HomePage() {
  const gridTemplateBase = `
    "main"
  `;

  const gridTemplateLarge = `
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
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <Box paddingLeft={2}>
            <GameHeading />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector />
              <SortSelector />
            </HStack>
          </Box>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
}

export default HomePage;
