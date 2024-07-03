import {FC, useState, useEffect} from "react";
import {StackDivider, VStack} from "@chakra-ui/react";
import useStoreCities from "../store/cities";
import type {ActiveView} from "../types/common";
import type {Forecast} from "../types/forecast";
import {getForecast} from "../server/forecast";
import {geoDataShortner} from "../lib/utils";
import Header from "../components/base/header";
import Body from "../components/base/body";
import Footer from "../components/base/footer";

const Dashboard: FC = () => {
  const citiesStore = useStoreCities();

  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [weather, setWeather] = useState<Forecast | null>(null);

  useEffect(() => {
    console.log('active view: ', activeView);

    if (activeView !== 'home') {
      if (activeView === 'first' && citiesStore.firstCity) {

        const firstLat = parseFloat(citiesStore.firstCity.lat);
        const firstLon = parseFloat(citiesStore.firstCity.lon);

        getForecast(
          geoDataShortner(firstLat), geoDataShortner(firstLon)
        )
          .then((data) => {
            setWeather(data);
          })
          .catch((error: Error) => {
            console.error('error: ', error);
          });
      }

      if (activeView === 'second' && citiesStore.secondCity) {

        const secondLat = parseFloat(citiesStore.secondCity.lat);
        const secondLon = parseFloat(citiesStore.secondCity.lon);

        getForecast(
          geoDataShortner(secondLat), geoDataShortner(secondLon)
        )
          .then((data) => {
            setWeather(data);
          })
          .catch((error: Error) => {
            console.error('error: ', error);
          });
      }

      if (activeView === 'third' && citiesStore.thirdCity) {

        const thirdLat = parseFloat(citiesStore.thirdCity.lat);
        const thirdLon = parseFloat(citiesStore.thirdCity.lon);

        getForecast(
          geoDataShortner(thirdLat), geoDataShortner(thirdLon)
        )
          .then((data) => {
            setWeather(data);
          })
          .catch((error: Error) => {
            console.error('error: ', error);
          });
      }
    }

  }, [activeView]);
  

  return (
    <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={5}
      align='stretch'
    >
      <Header viewSetter={setActiveView}/>
      <Body activeView={activeView} data={weather}/>
      <Footer />
    </VStack>
  )
};

export default Dashboard;