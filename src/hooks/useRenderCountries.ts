
import { useStore } from '@src/store';

export function useRenderCountries() {
  const allCountries = useStore(state => state.allCountries);
  const renderCountries = useStore(state => state.renderCountries);
  const setRenderCountries = useStore(state => state.setRenderCountries);

  const minCountries = 50;
  const maxCountries = 200;

  const incrementCountriesRendered = (incrementNumber: number) => {
    const newNumOfCountries = renderCountries.length + incrementNumber;

    if(newNumOfCountries <= maxCountries) {
      const newRenderedCountries = allCountries.slice(0, newNumOfCountries);
      setRenderCountries(newRenderedCountries);
    } 
  }

  const reduceCountriesRendered = (reduceNumber: number) => {
    const newNumOfCountries = renderCountries.length - reduceNumber;

    if(newNumOfCountries >= minCountries) {
      const newRenderedCountries = allCountries.slice(0, newNumOfCountries);
      setRenderCountries(newRenderedCountries);
    } 
  }

  return {
    incrementCountriesRendered,
    reduceCountriesRendered
  }
}