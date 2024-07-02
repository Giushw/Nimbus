import {FC} from "react";
import {
  Center,
  Text,
  VStack
} from "@chakra-ui/react";
import '../../style/animation.css';

const Body: FC = () => {
  return (
    <VStack
      // h='80vh'
      py={'20px'}
      spacing={10}
      align='stretch'
      // p={4}
    >  
      {/* Empty state */}
      <Center p={5} bg='seasalt.800' h={'71vh'} color='robin.900' borderRadius={15}
        sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          boxSizing: 'border-box'
        }}
      >      
        <Text fontSize='5xl'
          sx={{
            textTransform: 'Capitalize',
            display: 'inline-block',
            paddingLeft: '125%',
            animation: 'marquee 20s linear infinite',
            willChange: 'transform'
          }}
        >
          Look for the Next City to get info about.
        </Text>
      </Center>

      {/* <Show above='sm'>
        <Box>This text appears at the "sm" value screen width or greater.</Box>
      </Show>
      <Hide below='md'>
        <Box>This text hides at the "md" value screen width and smaller.</Box>
      </Hide> */}
    </VStack>
  )
};

export default Body;