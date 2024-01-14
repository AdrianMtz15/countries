import { useStore } from "@src/store";

export function useFilterCountries() {
  const allCountries = useStore(state => state.allCountries);

  const filterBySearch = (text: string) => {

    if(text.length > 0) {
      const data = allCountries.filter((obj, index) => {
        const searchText = text.toLowerCase();
        const countryName = obj.name.common.toLowerCase();
        const isSearched = countryName.includes(searchText);
  
        return isSearched;
      });

      return data;
    } else {
      return [];
    }
  }

  return {
    filterBySearch
  }
}