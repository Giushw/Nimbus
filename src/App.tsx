import {FC, useEffect, 
  // useState
} from 'react';
import {getGeoData} from './server/geoData';
// import {getForecast} from './server/forecast';
// import {geoDataShortner} from './lib/utils';
import useStoreCities from './store/cities';
import Dashboard from './layout/Dashboard';

const App: FC = () => {
  const citiesStore = useStoreCities();
  
  // const [weather, setWeather] = useState(null);
  // const [geo, setGeo] = useState(null);

  // 45.46 , 9.18
  useEffect(() => {
    const first = citiesStore.citiesList[0];
    const second = citiesStore.citiesList[1];
    const third = citiesStore.citiesList[2];
    // getForecast(geoDataShortner(45.4641943), geoDataShortner(9.1896346))
    //   .then((data) => {
    //     console.log('recived');
    //     setWeather(data);
    //   })
    //   .catch((error: Error) => {
    //     console.error('error: ', error);
    //   })
    //   .finally(() => console.log('finished'));

    getGeoData(first)
      .then((data) => {
        console.log('first recived');
        citiesStore.updateFirstCity(data[0])
        citiesStore.updateLoadingFirst(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => citiesStore.updateLoadingFirst(false));

    getGeoData(second)
      .then((data) => {
        console.log('second recived');
        citiesStore.updateSecondCity(data[0])
        citiesStore.updateLoadingSecond(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => citiesStore.updateLoadingSecond(false));

    getGeoData(third)
      .then((data) => {
        console.log('third recived');
        citiesStore.updateThirdCity(data[0])
        citiesStore.updateLoadingThird(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => citiesStore.updateLoadingThird(false));

  }, []);

  useEffect(() => {
    console.log('first geo data: ', citiesStore.firstCity)
  }, [citiesStore.firstCity]);

  useEffect(() => {
    console.log('second geo data: ', citiesStore.secondCity)
  }, [citiesStore.secondCity]);

  useEffect(() => {
    console.log('third geo data: ', citiesStore.thirdCity)
  }, [citiesStore.thirdCity]);

  return (
    <Dashboard />
  )
}

export default App;
