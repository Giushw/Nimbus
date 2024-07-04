import {FC} from "react";
import {
  Container,
  Grid,
  GridItem,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import type {Forecast} from "../../types/forecast";
import {wmoCodeToLabel} from "../../lib/wmoParse";
import {normalizeDate, trimLocation} from "../../lib/utils";
import ForecastIcon from "../icons/ForecastIcon";
import WindIcon from "../icons/WindIcon";

const getCardinalDirection = (degree: number): string => {
  const directions = [
    'North', 'North East', 
    'East', 'South East', 
    'South', 'SOuth West', 
    'West', 'North West'
  ];
  const index = Math.round(degree / 45) % 8;
  return directions[index];
};

const getWindIntensity = (speed: number): string => {
  if (speed < 1) return 'Calm';
  if (speed < 5) return 'Light breeze';
  if (speed < 12) return 'Gentle breeze';
  if (speed < 19) return 'Moderate breeze';
  if (speed < 28) return 'Fresh breeze';
  if (speed < 38) return 'Strong breeze';
  if (speed < 49) return 'Near gale';
  if (speed < 61) return 'Gale';
  if (speed < 74) return 'Severe gale';
  if (speed < 88) return 'Strong storm';
  if (speed < 102) return 'Violent storm';
  return 'Hurricane';
};

interface DesktopViewProps {
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

const DesktopView: FC<DesktopViewProps> = ({data, colorConfig, info}) => {

  const windCondition = {
    direction: getCardinalDirection(data.current.wind_direction_10m),
    intensity: getWindIntensity(data.current.wind_speed_10m)
  };
  
  return (
    <Grid
      h='100%'
      w='100%'
      templateRows='repeat(4, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={5}
    >
      <GridItem rowSpan={4} colSpan={1} >
        <VStack  h='100%' w='100%' spacing={5} p={5}
          sx={{
            writingMode: 'vertical-lr',
            textOrientation: 'mixed',
            willChange: 'transform',
            transform: 'rotate(180deg)'
          }}
        >
          <Heading as='h2' fontSize='120px'>
            {info.name}
          </Heading>

          <Text fontSize='32px' color={colorConfig.accent}>
            {trimLocation(info.display_name)}
          </Text>
        </VStack>
      </GridItem>

      <GridItem rowSpan={2} colSpan={2}>
        <Container maxW='xl' centerContent h='100%'>
          <VStack align='flex-start' justify='center' h='100%' p={5} spacing={2}>
            <HStack color={colorConfig.color}>
              <Text fontWeight={600} fontSize='xl'>
                Umidity: 
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current.relative_humidity_2m}
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current_units.relative_humidity_2m}
              </Text>
            </HStack>

            <HStack color={colorConfig.color}>
              <Text fontWeight={600} fontSize='xl'>
                Cloud Cover: 
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current.cloud_cover}
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current_units.cloud_cover}
              </Text>
            </HStack>

            <HStack color={colorConfig.color}>
              <Text fontWeight={600} fontSize='xl'>
                Pressure: 
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current.pressure_msl}
              </Text>
              <Text fontWeight={600} fontSize='xl'>
                {data.current_units.pressure_msl}
              </Text>
            </HStack>

            <HStack color={colorConfig.color}>
                <Text fontWeight={600} fontSize='xl'>
                  Wind Direction: 
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current.wind_direction_10m}
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current_units.wind_direction_10m}
                </Text>
              </HStack>

              <HStack color={colorConfig.color}>
                <Text fontWeight={600} fontSize='xl'>
                  Wind Speed: 
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current.wind_speed_10m}
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current_units.wind_speed_10m}
                </Text>
              </HStack>

              <HStack color={colorConfig.color}>
                <Text fontWeight={600} fontSize='xl'>
                  Wind Gusts: 
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current.wind_gusts_10m}
                </Text>
                <Text fontWeight={600} fontSize='xl'>
                  {data.current_units.wind_gusts_10m}
                </Text>
              </HStack>

            <HStack color={colorConfig.color}>
              <Text fontWeight={600} fontSize='2xl'>
                Recorded at: 
              </Text>
              <Text fontWeight={600} fontSize='2xl'>
                {normalizeDate(data.current.time)}
              </Text>
            </HStack>
          </VStack>
        </Container>
      </GridItem>
      
      <GridItem rowSpan={2} colSpan={2}>
        <VStack align='center' justify='space-around' h='100%' p={5}>
          <Text fontSize='4xl' fontWeight={600} color={colorConfig.color}>
            {`From ${windCondition.direction} (${windCondition.intensity})`}
          </Text>
          
          <WindIcon pathStroke={colorConfig.accent} h={48} w={48}/>
        </VStack>
      </GridItem>

      <GridItem rowSpan={2} colSpan={2} >
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
            <Text fontWeight={600} fontSize='xl'>
              Perceived: 
            </Text>
            <Text fontWeight={600} fontSize='xl'>
              {data.current.apparent_temperature}
            </Text>
            <Text fontWeight={600} fontSize='xl'>
              {data.current_units.apparent_temperature}
            </Text>
          </HStack>
        </VStack>
      </GridItem>

      <GridItem rowSpan={2} colSpan={2}>
        <VStack align='center' justify='space-around' h='100%' p={5}>
          <Text fontSize='4xl' fontWeight={600} color={colorConfig.color}>
            {wmoCodeToLabel(data.current.weather_code.toString())}
          </Text>
          
          <ForecastIcon wmo={data.current.weather_code} stroke={colorConfig.accent}/>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default DesktopView;
