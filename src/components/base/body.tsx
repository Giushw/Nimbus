import {FC} from "react";
import {
  Box,
  Center,
  Container,
  HStack,
  Heading,
  Spinner,
  Text,
  VStack
} from "@chakra-ui/react";
import useStoreCities from "../../store/cities";
import type {ActiveView} from "../../types/common";
import type {Forecast} from "../../types/forecast";
import '../../style/animation.css';
import wmoParser from "../../lib/wmoParse";
import {normalizeDate} from "../../lib/utils";
import ClearIcon from "../icons/ClearIcon";
import OvercastIcon from "../icons/OvercastIcon";
import FogIcon from "../icons/FogIcon";
import DrizzleIcon from "../icons/DrizzleIcon";
import FreezeDrizzleIcon from "../icons/FreezeDrizzleIcon";
import RainIcon from "../icons/RainIcon";

interface BodyProps {
  activeView: ActiveView,
  data: Forecast | null
}

const Body: FC<BodyProps> = ({activeView, data}) => {
  const isHome = activeView === 'home';
  const isFirst= activeView === 'first';
  const isSecond = activeView === 'second';
  const isThird = activeView === 'third';

  return (
    <VStack spacing={10} align='stretch'>  
      {isHome &&
        <Center p={5} bg='seasalt.800' h={'75vh'} color='robin.900' borderRadius={15}
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
      }

      {isFirst &&
        <FirstView data={data}/>
      }

      {isSecond &&
        <Text>Second Content</Text>
      }
      {isThird &&
        <Text>Third Content</Text>
      }

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

interface FirstViewProps {
  data: Forecast | null}

const FirstView : FC<FirstViewProps> = ({data}) => {
  const firstCityinfo = useStoreCities().firstCity;

  return (
    <VStack
      h={'75vh'}
      p={5}
      // align='center'
      justify='space-between'
      borderRadius={15}
      bg='robin.700'
      color='liquorice.900'
    > 
      {!data && 
        <Spinner color='liquorice.900' />
      }

      {data &&
        <>
          <Container size='lg' centerContent>
            <Heading as='h2' size='2xl'>
              { firstCityinfo ? firstCityinfo.name : 'no Data'}
            </Heading>

            <HStack color={'seasalt.800'}>
              {/* <Text fontSize={'xl'}>
                Apparent: 
              </Text>
              <Text fontSize={'xl'}>
                {data.current.apparent_temperature}
              </Text> */}
              {/* <Text fontSize={'xl'}>
                {data.current_units.apparent_temperature}
              </Text> */}
              <Text fontSize={'xl'}>
                {firstCityinfo ? firstCityinfo.display_name : 'no data'}
              </Text>
            </HStack>
          </Container>

          <VStack >
            <Text fontSize='2xl' fontWeight={500} color='seasalt.800'>{wmoParser(data.current.weather_code.toString())}</Text>
            
            <HStack>
              <Heading as='h3' size='4xl'>
                {data.current.temperature_2m}
              </Heading>
              <Heading as='h3' size='2xl' mb={5}>
                {data.current_units.temperature_2m}
              </Heading>
            </HStack>
            
            {/* <ClearIcon pathStroke='seasalt.800' /> */}
            {/* <OvercastIcon pathStroke='seasalt.800' w={48} h={48} /> */}
            {/* <FogIcon pathStroke='seasalt.800'  w={48} h={48} /> */}
            {/* <DrizzleIcon pathStroke='seasalt.800'  w={48} h={48} /> */}
            {/* <FreezeDrizzleIcon pathStroke='seasalt.800'  w={48} h={48} /> */}
            <RainIcon pathStroke='seasalt.800' />
            {/* <ClearIcon pathStroke='seasalt.800' /> */}
          </VStack>

          <Container size='lg' centerContent>
            <HStack>
              <Text>
                Recorded at: 
              </Text>
              <Text>
                {normalizeDate(data.current.time)}
              </Text>
            </HStack>
          </Container>
        </>
      }
    </VStack>
  );
}