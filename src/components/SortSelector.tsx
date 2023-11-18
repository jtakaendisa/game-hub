import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const menuOptions = [
    'Relevance',
    'Date added',
    'Name',
    'Release date',
    'Popularity',
    'Average rating',
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: Relevance
      </MenuButton>
      <MenuList>
        {menuOptions.map((option) => (
          <MenuItem key={option} onClick={() => {}}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
