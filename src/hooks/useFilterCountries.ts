import { useStore } from "@src/store";

export function useFilterCountries() {
  const allCountries = useStore(state => state.allCountries);
  const setFilteredCountries = useStore(state => state.setFilteredCountries);

  const filterBySearch = (countries: CountryData[], text: string) => {
    if(text.length > 0) {
      const data = countries.filter((obj, index) => {
        const searchText = text.toLowerCase();
        const countryName = obj.name.common.toLowerCase();
        const isSearched = countryName.includes(searchText);
  
        return isSearched;
      });

      return data;
    } else {
      return countries;
    }
  }

  const filterByRegion = (countries: CountryData[], region: string) => {
    if(region.length > 0) {
      const data = countries.filter((obj, index) => {
        const regionName = region.toLowerCase();
        const countryRegion = obj.region.toLowerCase();
        const isMatch = countryRegion.includes(regionName);
  
        return isMatch;
      });

      return data;
    } else {
      return countries;
    }
  }

  const filterCountries = (search: string, region: string) => {
    let currentCountries = [...allCountries];

    currentCountries = filterBySearch(currentCountries, search);
    currentCountries = filterByRegion(currentCountries, region);

    setFilteredCountries(currentCountries);
  }

  return {
    filterCountries
  }
}