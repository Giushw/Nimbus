import {FC, useEffect} from 'react';
import useStoreCities from './store/cities';
import {getGeoData} from './server/geoData';
import Dashboard from './layout/Dashboard';
import {MOCK_FIRST, MOCK_SECOND, MOCK_THIRD} from './mock/geoData';

const App: FC = () => {
  const citiesStore = useStoreCities();
  const [firstCity, secondCity, thirdCity] = citiesStore.citiesList;
  
  useEffect(() => {
    if (!citiesStore.firstCity) {
      getGeoData(firstCity)
      .then((data) => {
        citiesStore.updateFirstCity(data[0]);
        citiesStore.updateLoadingFirst(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
        citiesStore.updateFirstCity(MOCK_FIRST);
      })
      .finally(() => citiesStore.updateLoadingFirst(false));
    }
  }, [citiesStore.firstCity]);

  useEffect(() => {
    if (!citiesStore.secondCity) {
      getGeoData(secondCity)
      .then((data) => {
        citiesStore.updateSecondCity(data[0]);
        citiesStore.updateLoadingSecond(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
        citiesStore.updateSecondCity(MOCK_SECOND);
      })
      .finally(() => citiesStore.updateLoadingSecond(false));
    }
  }, [citiesStore.secondCity]);

  useEffect(() => {
    if (!citiesStore.thirdCity) {
      getGeoData(thirdCity)
      .then((data) => {
        citiesStore.updateThirdCity(data[0]);
        citiesStore.updateLoadingThird(true);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
        citiesStore.updateThirdCity(MOCK_THIRD);
      })
      .finally(() => citiesStore.updateLoadingThird(false));
    }
  }, [citiesStore.thirdCity]);

  return (
    <Dashboard />
  )
}

export default App;
