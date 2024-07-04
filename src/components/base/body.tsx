import {FC} from "react";
import {
  Center,
  Text,
  VStack
} from "@chakra-ui/react";
import type {ActiveView} from "../../types/common";
import type {Forecast} from "../../types/forecast";
import ForecastView from "../forecast/ForecastView";

import '../../style/animation.css';

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
        <ForecastView type='first' data={data}/>
      }

      {isSecond &&
        <ForecastView type='second' data={data}/>
      }

      {isThird &&
        <ForecastView type='third' data={data}/>
      }
    </VStack>
  )
};

export default Body;
