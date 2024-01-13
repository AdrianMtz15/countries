'use client'

import{ useEffect, useRef, useState } from "react";
import { useStore } from "@src/store";
import { CountryCard } from "@components/CountryCard";

import type { HTMLAttributes, ReactNode, RefObject } from "react";
import { useIntersecionObserver } from "@src/hooks/useIntersectionObserver";
import { useInfiniteScroll } from "@src/hooks/useInfiniteScroll";

type Props = HTMLAttributes<HTMLElement> & {defaultCountries: CountryData[]}

export function Countries({ defaultCountries, className, ...htmlProps }: Props) {
  const allCountries = useStore((state) => state.allCountries);
  const setAllCountries = useStore((state) => state.setAllCountries);
  const setRenderCountries = useStore((state) => state.setRenderCountries);
  const renderCountries = useStore((state) => state.renderCountries);
  const isLoading = useStore((state) => state.isLoading);

  const { targetIndex } = useInfiniteScroll();

  useEffect(() => {
    setAllCountries(defaultCountries);
    setRenderCountries(defaultCountries.slice(0, 50));
  }, []);

  useEffect(() => {
    console.log('render countries: ', renderCountries);
  }, [renderCountries])
  
  return(
    <section 
      className={`countries-container pt-[35px] h-max ${className}`}
      {...htmlProps}
    >
      {
        isLoading && <p>Loading...</p>
      }
      {
        renderCountries.map((obj, index) => {
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