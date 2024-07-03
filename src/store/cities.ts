import {create} from 'zustand';
import {GeoEntity} from '../types/geoData';

interface StoreCities {
  citiesList: string[];
  loadingFirst: boolean;
  loadingSecond: boolean;
  loadingThird: boolean;
  firstCity: GeoEntity | null,
  secondCity: GeoEntity | null,
  thirdCity: GeoEntity | null,
  updateLoadingFirst: (data: boolean) => void;
  updateLoadingSecond: (data: boolean) => void;
  updateLoadingThird: (data: boolean) => void;
  updateFirstCity: (data: GeoEntity) => void;
  updateSecondCity: (data: GeoEntity) => void;
  updateThirdCity: (data: GeoEntity) => void;
}

const useStoreCities = create<StoreCities>()((set) => ({
  citiesList: ['Milan', 'Tokyo', 'Anchorage'],
  loadingFirst: false,
  loadingSecond: false,
  loadingThird: false,
  firstCity: null,
  secondCity: null,
  thirdCity: null,
  updateLoadingFirst: (data: boolean) => set(() => ({ loadingFirst: data })),
  updateLoadingSecond: (data: boolean) => set(() => ({ loadingSecond: data })),
  updateLoadingThird: (data: boolean) => set(() => ({ loadingThird: data })),
  updateFirstCity: (data: GeoEntity) => set(() => ({ firstCity: data })),
  updateSecondCity: (data: GeoEntity) => set(() => ({ secondCity: data })),
  updateThirdCity: (data: GeoEntity) => set(() => ({ thirdCity: data })),
}));

export default useStoreCities;
