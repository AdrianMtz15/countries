'use client'
import { ChangeEventHandler } from 'react';
import { useStore } from '@src/store';
import { Select, SelectItem } from "@nextui-org/react"

type SelectHandler = ChangeEventHandler<HTMLSelectElement>

export function SelectRegion() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const setRegion = useStore(state => state.setRegion);
  const allCountries = useStore(state => state.allCountries);
  const filteredCountries = useStore(state => state.filteredCountries);
  const setFilteredCountries = useStore(state => state.setFilteredCountries);


  const handleChangeRegion: SelectHandler = (event) => {
    const selected = event.target.value;
    setRegion(selected);
  }


  return(
    <Select 
      onChange={handleChangeRegion}
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