import { HStack, ListItem, Skeleton, SkeletonCircle } from '@chakra-ui/react';

const GenreListItemSkeleton = () => {
  return (
    <ListItem paddingY="0.313rem">
      <HStack>
        <SkeletonCircle width="42px" borderRadius={8} />
        <Skeleton height={3} width="100%" />
      </HStack>
    </ListItem>
  );
};

export default GenreListItemSkeleton;
