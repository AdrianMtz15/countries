'use client'
import { Select, SelectItem } from "@nextui-org/react"

export function SelectRegion() {
  const regions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  return(
    <Select 
      label="Filter by Region" 
      className="max-w-xs" 
      classNames={{
        label: 'text-[1.5rem] text-bold'
      }}
    >
      {
        regions.map(region => {
          return(
            <SelectItem
              key={region}
              value={region.toLowerCase()}
            >
              {region}
            </SelectItem>
          )
        })
      }

    </Select>
  )
}