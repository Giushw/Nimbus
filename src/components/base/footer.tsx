import {FC} from "react";
import {
  Box, 
  Flex, 
  HStack, 
  Icon, 
  Link, 
  Spacer, 
  StackDivider, 
  Text
} from "@chakra-ui/react";
import {FaGithub, FaLinkedin} from "react-icons/fa";

const Footer: FC = () => {
  return (
    <Flex p={'20px'} pt={0}>
      <Box p='4'>
        <Text>© Nimbus 2024</Text>
      </Box>
      <Spacer />
      <HStack 
        p={4} 
        divider={<StackDivider borderColor='gray.200' />}
        spacing={4}
      >
        <Link href='https://github.com/Giushw' isExternal>
          <Icon as={FaGithub} boxSize='20px' color='robin.900'/>
        </Link>
        <Link href='https://www.linkedin.com/in/giuseppedellavvocato/' isExternal>
          <Icon as={FaLinkedin}  boxSize='20px' color='robin.900' />
        </Link>
      </HStack>
    </Flex>
  )
};

export default Footer;