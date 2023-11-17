import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';

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
          <GridItem area="aside">Aside</GridItem>
        </Show>
        <GridItem area="main">Main</GridItem>
      </Grid>
    </div>
  );
}

export default App;
