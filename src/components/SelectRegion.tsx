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
      className="input-region " 
      classNames={{
        label: 'text-[1.5rem] text-bold ',
        value: 'text-[1.8rem]',
        base: 'rounded-md',
        trigger: 'rounded-md border ',
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