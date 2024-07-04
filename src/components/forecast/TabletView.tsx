import {FC} from "react";
import {
  Box,
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import type {Forecast} from "../../types/forecast";
import {wmoCodeToLabel} from "../../lib/wmoParse";
import {normalizeDate, trimLocation} from "../../lib/utils";
import ForecastIcon from "../icons/ForecastIcon";

interface TabletViewProps {
  data: Forecast,
  colorConfig: {
    bg: string,
    color: string,
    accent: string
  },
  info: {
    name: string,
    display_name: string
  }
}

const TabletView: FC<TabletViewProps> = ({data, colorConfig, info}) => {
  return (
    <Grid
      h='100%'
      w='100%'
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(4, 1fr)'
      gap={5}
    >
      <GridItem colSpan={4}>
        <VStack align='center' justify='center' h='100%' p={5} spacing={10}>
          <Container size='lg' centerContent>
            <Heading as='h2' size='2xl'>
              {info.name}
            </Heading>

            <Text fontSize='xl' color={colorConfig.accent}>
              {trimLocation(info.display_name)}
            </Text>
          </Container>
          <SimpleGrid columns={2} spacing={10}>
            <Box >
              <HStack color={colorConfig.color}>
                <Text fontWeight={500} fontSize='xl'>
                  Umidity: 
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current.relative_humidity_2m}
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current_units.relative_humidity_2m}
                </Text>
              </HStack>
              
              <HStack color={colorConfig.color}>
                <Text fontWeight={500} fontSize='xl'>
                  Cloud Cover: 
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current.cloud_cover}
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current_units.cloud_cover}
                </Text>
              </HStack>
            </Box>
            <Box >
              <HStack color={colorConfig.color}>
                <Text fontWeight={500} fontSize='xl'>
                  Pressure: 
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current.pressure_msl}
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {data.current_units.pressure_msl}
                </Text>
              </HStack>

              <HStack color={colorConfig.color}>
                <Text fontWeight={500} fontSize='xl'>
                  Recorded at: 
                </Text>
                <Text fontWeight={500} fontSize='xl'>
                  {normalizeDate(data.current.time)}
                </Text>
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>
      </GridItem>

      <GridItem colSpan={2} >
        <VStack align='center' justify='center' h='100%' p={5}>
          <HStack>
            <Heading as='h3' size='4xl'>
              {data.current.temperature_2m}
            </Heading>
            <Heading as='h3' size='2xl' mb={5}>
              {data.current_units.temperature_2m}
            </Heading>
          </HStack>

          <HStack color={colorConfig.accent}>
            <Text fontWeight={500} fontSize='xl'>
              Apparent: 
            </Text>
            <Text fontWeight={500} fontSize='xl'>
              {data.current.apparent_temperature}
            </Text>
            <Text fontWeight={500} fontSize='xl'>
              {data.current_units.apparent_temperature}
            </Text>
          </HStack>
        </VStack>
      </GridItem>

      <GridItem colSpan={2}>
        <VStack align='center' justify='space-around' h='100%' p={5}>
          <Text fontSize='3xl' fontWeight={500} color={colorConfig.color}>
            {wmoCodeToLabel(data.current.weather_code.toString())}
          </Text>
          
          <ForecastIcon wmo={data.current.weather_code} stroke={colorConfig.accent}/>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default TabletView;
