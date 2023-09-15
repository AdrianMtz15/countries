
import { CountryCard } from "@/components/CountryCard";
import type{ HTMLAttributes } from "react";


type Props = HTMLAttributes<HTMLElement>

const fetchCountries = async() => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();

  return countries;
}

export async function Countries({className, ...htmlProps}: Props) {
  const data: CountryData[] = await fetchCountries();
  const countries = data.filter((obj, index) => {
    if (index <= 9) return obj
  });

  return(
    <section 
      className={`pt-[35px] ${className}`}
      {...htmlProps}
    >
      {
        countries.map(obj => (
          <CountryCard 
            key={obj.population} 
            country={obj}
          />
        ))
      }
    </section>
  )
}