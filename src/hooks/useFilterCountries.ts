import { useStore } from "@src/store";

export function useFilterCountries() {
  const renderCountries = useStore(state => state.renderCountries);
  const search = useStore(state => state.search);

  const filterBySearch = () => {
    const data = renderCountries.filter((obj, index) => {
      const searchText = search.toLowerCase();
      const countryName = obj.name.common.toLowerCase();
      const isSearched = countryName.includes(searchText);

      return isSearched;
    });

    return data;
  }

  return {
    filterBySearch
  }
}