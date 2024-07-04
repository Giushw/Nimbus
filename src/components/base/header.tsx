import {FC} from "react";
import {Box, Button, Flex, HStack, Heading, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Spacer, Text} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import useStoreCities from "../../store/cities";
import type {ActiveView} from "../../types/common";
import NimbusIcon from "../icons/Nimbus";

interface HeaderProps {
  viewSetter: React.Dispatch<React.SetStateAction<ActiveView>>;
}

const Header: FC<HeaderProps> = ({viewSetter}) => {
  const citiesStore = useStoreCities();

  const handleClick = (index: number): void => {
    switch (index) {
      case 0:
        return viewSetter('first');

      case 1:
        return viewSetter('second');

      case 2:
        return viewSetter('third');
        
      default:
        return viewSetter('home');
    }
  };
  
  return (
    <Flex p={'20px'} pb={0}>
      <Box as="button" onClick={() => handleClick(11)}>
        <HStack spacing={5}>
          <NimbusIcon pathStroke='robin.900' w={35} h={35}/>
          <Heading as='h2' size='xl' color={'robin.900'}>
            Nimbus
          </Heading>
        </HStack>
        
      </Box>

      <Spacer />

      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} >
          Cities
        </MenuButton>
        <MenuList bg={'liquorice.800'}>
          {citiesStore.citiesList.map((city, i) => 
            <>
              <MenuItem bg={'liquorice.800'} key={i} onClick={() => handleClick(i)}>
                <Text fontSize='lg' color={'robin.900'} fontWeight={600}>{city}</Text>
              </MenuItem>
              {
                i !== citiesStore.citiesList.length - 1 &&
                <MenuDivider />
              }
            </>
            )
          }
        </MenuList>
      </Menu>
    </Flex>
  )
};

export default Header;