'use client'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image'

export function CountryCard({ country }: { country: CountryData }): JSX.Element {
  
  return(
      <Card 
        className="relative w-[220px] h-[250px] rounded-none 
        p-0 mb-16 hover:cursor-pointer "
      >
        <CardHeader className="p-0 flex-col items-start w-full h-[125px]">
          <Image
            alt={`${country.name.common}-flag`}
            className="w-full h-full object-cover rounded-none p-0"
            src={country.flags.png}
            width={150}
            height={100}
          />
        </CardHeader>

        <CardBody className="overflow-visible py-7 h-[125px]">
          <p className="text-tiny uppercase font-bold mb-5 leading-[1.8rem] text-[1.5rem]">{country.name.official}</p>
          <small className="text-default-500 text-[1.2rem]"><b>Population:</b> {country.population}</small>
          <small className="text-default-500 text-[1.2rem]"><b>Region:</b> {country.region}</small>
          <small className="text-default-500 text-[1.2rem]"><b>Capitals:</b> { country.capital.map(cap => cap) }</small>
        </CardBody>
      </Card>
  )
}


