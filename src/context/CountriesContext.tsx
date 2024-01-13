'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import type { Dispatch, PropsWithChildren, SetStateAction } from 'react';

type CountriesContext = {
  state: {
    allCountries: CountryData[],
    filteredCountries: CountryData[],
    search: string,
    region: string,
    loading: boolean,
  }
  setCountriesState: Dispatch<SetStateAction<CountriesState>>

}

const CountriesContext = createContext<CountriesContext>({
  state: {
    allCountries: [],
    filteredCountries: [],
    search: '',
    region: '',
    loading: false,
  },
  setCountriesState: () => {}
});

type CountriesState = {
  allCountries: CountryData[],
  filteredCountries: CountryData[],
  search: string,
  region: string,
  loading: boolean,
}


export const CountriesProvider = ({children, defaultCountries}: PropsWithChildren & {defaultCountries: CountryData[]}) => {

  const [countriesState, setCountriesState] = useState<CountriesState>({
    allCountries: defaultCountries,
    filteredCountries: [],
    search: '',
    region: '',
    loading: false,
  });

  const {
    allCountries,
    filteredCountries,
    search,
  } = countriesState;

  useEffect(() => {
    filterBySearch();
  }, [search]);

  const filterBySearch = () => {
    if(search.length > 0) {
      console.log(search.length);
      
      let data;

      if(filteredCountries.length > 0) {
        data = filteredCountries.filter(country => {
          const name: string = country.name.common.toLowerCase();
          const searchText: string = search.toLowerCase();
          const isInSearch = name.includes(searchText);
  
          return isInSearch;
        });
      } else {
        data = allCountries.filter(country => {
          const name: string = country.name.common.toLowerCase();
          const searchText: string = search.toLowerCase();
          const isInSearch = name.includes(searchText);
  
          return isInSearch;
        });
      }

      setCountriesState({
        ...countriesState,
        filteredCountries: data
      });

    } else {
      setCountriesState({
        ...countriesState,
        filteredCountries: []
      });
    }
  }

  // const filterByRegion = () => {

  //   if(region.length > 0 ) {
  //   const currentCountries = filteredCountries.length > 0 ? [...filteredCountries] : [...countries]
  //     const filteredData = currentCountries.filter(country => {
  //       return country.region.toLowerCase() == region.toLowerCase();
  //     });

  //     setFilteredCountries(filteredData);
  //   } else {
  //     setFilteredCountries([]);
  //   }
  // }


  return(
    <CountriesContext.Provider value={{
      state: {
        ...countriesState,
      },
      setCountriesState
    }}>
      {children}
    </CountriesContext.Provider>
  )
}

export const useCountriesContext = () => {
  return useContext(CountriesContext);
}