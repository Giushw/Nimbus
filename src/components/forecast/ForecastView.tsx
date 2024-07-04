import {FC} from "react";
import {
  Hide,
  Show,
  Spinner,
  VStack
} from "@chakra-ui/react";
import useStoreCities from "../../store/cities";
import type {Forecast} from "../../types/forecast";
import MobleView from "./MobleView";
import TabletView from "./TabletView";
import DesktopView from "./DesktopView";

import '../../style/animation.css';

const COLOR_CONFIG = {
  first: {
    bg: 'robin.900',
    color: 'liquorice.800',
    accent: 'seasalt.800',
  },
  second: {
    bg: 'liquorice.700',
    color: 'seasalt.800',
    accent: 'robin.900',
  },
  third: {
    bg: 'seasalt.800',
    color: 'robin.800',
    accent: 'liquorice.800',
  },
};

type ForecastViewType = 'first' | 'second' | 'third';

interface ForecastViewProps {
  type: ForecastViewType,
  data: Forecast | null
}

const ForecastView : FC<ForecastViewProps> = ({type, data}) => {
  const firstCityinfo = useStoreCities().firstCity;
  const secondCityInfo = useStoreCities().secondCity;
  const thirdCityInfo = useStoreCities().thirdCity;

  const colorConfig = COLOR_CONFIG[type] || COLOR_CONFIG.first;

  const cityInfo = {
    first: firstCityinfo,
    second: secondCityInfo,
    third: thirdCityInfo
  }

  return (
    <VStack
      h={'75vh'}
      p={5}
      justify='space-between'
      borderRadius={15}
      bg={colorConfig.bg}
      color={colorConfig.color}
    > 
      {!data && 
        <Spinner color='liquorice.900' />
      }

      {data &&
        <>
          <Show below='767px'>
            <MobleView data={data} info={cityInfo[type] ?? {name: 'N/D', display_name: 'N/D'}} colorConfig={colorConfig}/>
          </Show>

          <Hide below='767px'>
            <Show below="1025px">
              <TabletView data={data} info={cityInfo[type] ?? {name: 'N/D', display_name: 'N/D'}} colorConfig={colorConfig}/>
            </Show>
          </Hide>

          <Show above="1026px">
            <DesktopView data={data} info={cityInfo[type] ?? {name: 'N/D', display_name: 'N/D'}} colorConfig={colorConfig}/>
          </Show>
        </>
      }
    </VStack>
  );
}

export default ForecastView;
