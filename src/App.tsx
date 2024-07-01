import {FC, useEffect, useState} from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import {getGeoData} from './server/geoData';
import {getForecast} from './server/forecast';

const App: FC = () => {
  const [count, setCount] = useState(0);
  const [weather, setWeather] = useState(null);
  const [geo, setGeo] = useState(null);

  // 45.46 , 9.18
  useEffect(() => {
    getForecast(45.4641943, 9.1896346)
      .then((data) => {
        console.log('recived');
        setWeather(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => console.log('finished'));

    getGeoData('Milano')
      .then((data) => {
        console.log(' geo recived');
        setGeo(data);
      })
      .catch((error: Error) => {
        console.error('error: ', error);
      })
      .finally(() => console.log(' geo finished'));
  }, []);

  useEffect(() => {
    console.log('weather data: ', weather)
  }, [weather]);

  useEffect(() => {
    console.log('geo data: ', geo)
  }, [geo]);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;
