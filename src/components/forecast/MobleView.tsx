import {FC} from "react";
import {
  Container,
  HStack,
  Heading,
  Text,
  VStack
} from "@chakra-ui/react";
import type {Forecast} from "../../types/forecast";
import {wmoCodeToLabel} from "../../lib/wmoParse";
import {normalizeDate, trimLocation} from "../../lib/utils";
import ForecastIcon from "../icons/ForecastIcon";

interface MobleViewProps {
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

const MobleView: FC<MobleViewProps> = ({data, colorConfig, info}) => {
  return (
    <>
      <Container size='lg' centerContent>
        <Heading as='h2' size='2xl'>
          {info.name}
        </Heading>

        <Text fontSize='xl' color={colorConfig.accent}>
          {trimLocation(info.display_name)}
        </Text>
      </Container>

      <VStack >
        <Text fontSize='2xl' fontWeight={500} color={colorConfig.accent}>
          {wmoCodeToLabel(data.current.weather_code.toString())}
        </Text>
        
        <HStack>
          <Heading as='h3' size='4xl'>
            {data.current.temperature_2m}
          </Heading>
          <Heading as='h3' size='2xl' mb={5}>
            {data.current_units.temperature_2m}
          </Heading>
        </HStack>
        
        <ForecastIcon wmo={data.current.weather_code} stroke={colorConfig.accent}/>
      </VStack>

      <Container size='lg' centerContent>
        <HStack>
          <Text fontWeight={500} fontSize='xl'>
            Recorded at: 
          </Text>
          <Text fontWeight={500} fontSize='xl'>
            {normalizeDate(data.current.time)}
          </Text>
        </HStack>
      </Container>
    </>
  );
};

export default MobleView;
