
import { CountryCard } from "@/components/CountryCard";
import type{ HTMLAttributes } from "react";


type Props = HTMLAttributes<HTMLElement>

const fetchCountries = async() => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();

  return countries;
}

export async function Countries({...htmlProps}: Props) {
  const data: CountryData[] = await fetchCountries();
  const countries = data.filter((obj, index) => {
    if (index <= 9) return obj
  });

  return(
    <section {...htmlProps}>
      {
        countries.map(obj => (
          <CountryCard key={obj.population} country={obj}/>
        ))
      }
    </section>
  )
}