'use client'

import{ useEffect, useRef, useState } from "react";
import { useStore } from "@src/store";
import { CountryCard } from "@components/CountryCard";
import type { HTMLAttributes, ReactNode, RefObject } from "react";
import { useInfiniteScroll } from "@src/hooks/useInfiniteScroll";
import { useFilterCountries } from "@src/hooks/useFilterCountries";

import NotFoundImg from "../../public/not-found.png";
import Image from "next/image";
import { CountriesNotFound } from "./CountriesNotFound";

type Props = HTMLAttributes<HTMLElement> & {defaultCountries: CountryData[]}

export function Countries({ defaultCountries, className, ...htmlProps }: Props) {
  const [currentCountries, setCurrentCountries] = useState<CountryData[]>([]);
  const [notFound, setNotFound] = useState<boolean>(false);

  const setAllCountries = useStore((state) => state.setAllCountries);
  const setRenderCountries = useStore((state) => state.setRenderCountries);
  const renderCountries = useStore((state) => state.renderCountries);
  const filteredCountries = useStore((state) => state.filteredCountries);
  const isLoading = useStore((state) => state.isLoading);
  const search = useStore((state) => state.search);
  const region = useStore((state) => state.region);

  const { targetIndex } = useInfiniteScroll();
  const { filterCountries } = useFilterCountries();

  useEffect(() => {
    setAllCountries(defaultCountries);
    setRenderCountries(defaultCountries.slice(0, 50));
  }, []);

  useEffect(() => {
    if(region.length > 0 || search.length > 0) {
      filteredCountries.length <= 0 ? setNotFound(true) : setNotFound(false);
      setCurrentCountries(filteredCountries);
    } else {
      setCurrentCountries(renderCountries);
    }
  }, [renderCountries, filteredCountries]);

  useEffect(() => {
    filterCountries(search, region);
  }, [search, region]);
  
  return(
    <section 
      className={`countries-container pt-[35px] h-max ${className}`}
      {...htmlProps}
    >
      {
        isLoading && <p>Loading...</p>
      }
      {
        notFound && <CountriesNotFound/>
      }
      {
        currentCountries.map((obj, index) => {
          return(
            <div key={index} className="px-4 w-full cards-container">
              <CountryCard 
                refIndex={index === targetIndex ? targetIndex : null}
                country={obj}
              />
            </div>
          )
        })
      }
    </section>
  )
}