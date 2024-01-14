import { create } from 'zustand'
import type { RefObject } from 'react'

type CountriesState = {
  allCountries: CountryData[],
  renderCountries: CountryData[],
  filteredCountries: CountryData[],
  search: string,
  region: string,
  isLoading: boolean,
  darkMode: boolean,
  observerRef: RefObject<Element> | null
}

type CountriesActions = {
  setAllCountries: (list: CountryData[]) => void,
  setFilteredCountries: (list: CountryData[]) => void,
  setRenderCountries: (list: CountryData[]) => void,
  setSearch: (text: string) => void,
  setRegion: (region: string) => void,
  setLoading: (isLoading: boolean) => void,
  setDarkMode: (darkMode: boolean) => void,
  setObserverRef: (ref: RefObject<Element> | null) => void
}

type CountriesStore = CountriesState & CountriesActions;

export const useStore = create<CountriesStore>(set => ({
  allCountries: [],
  renderCountries: [],
  filteredCountries: [],
  search: '',
  region: '',
  darkMode: true,
  isLoading: false,
  observerRef: null,
  setAllCountries: (data) => {
    set((state) => {
      return {
        allCountries: data
      }
    })
  },
  setRenderCountries: (data) => {
    set(state => {
      return {
        renderCountries: data
      }
    })
  },
  setFilteredCountries: (data) => {
    set((state) => {
      return {
        filteredCountries: data
      }
    })
  },
  setSearch: (text) => {
    set((state) => {
      return {
        search: text
      }
    })
  },
  setRegion: (region) => {
    set((state) => {
      return {
        region
      }
    })
  },
  setLoading: (isLoading) => {
    set((state) => {
      return {
        isLoading: isLoading
      }
    });
  },
  setDarkMode: (darkMode) => {
    set((state) => {
      return {
        darkMode,
      }
    });
  },
  setObserverRef: (ref) => {
    set((state) => {
      return {
        observerRef: ref
      }
    });
  }
}))