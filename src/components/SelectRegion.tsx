'use client'

import { useCountriesContext } from "@context/CountriesContext";
import { Select, SelectItem } from "@nextui-org/react"


export function SelectRegion() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];
  const {
    setRegion
  } = useCountriesContext();

  return(
    <Select 
      onChange={(e) => {
        setRegion(e.target.value);
      }}
      radius="none"
      labelPlacement="outside"
      variant="bordered"
      label="Filter by Region" 
      className="input-region bg-light-elements" 
      classNames={{
        label: 'text-[1.5rem] text-bold text-light-text',
        value: 'text-[1.8rem]',
        trigger: 'rounded-md border bg-light-elements',
        listboxWrapper: 'rounded-md',
        listbox: 'rounded-md',
      }}
    >
      {
        regions.map(region => {
          return(
            <SelectItem
              key={region}
              value={region}
              textValue={region}
            >
              <p className="text-[1.5rem] leading-7">{region}</p>
            </SelectItem>
          )
        })
      }

    </Select>
  )
}