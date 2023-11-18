import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box borderRadius="0.625rem" overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainer;
