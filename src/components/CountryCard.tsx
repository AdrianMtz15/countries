'use client'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from 'next/image'

export function CountryCard({ country }: { country: CountryData }): JSX.Element {
  
  return(
      <Card className="relative w-[20vw] max-w-[200px] rounded-none p-0 mb-5">
        <CardHeader className="p-0 flex-col items-start w-full h-[100px]">
          <Image
            alt={`${country.name.common}-flag`}
            className="w-full h-full object-cover rounded-none p-0"
            src={country.flags.png}
            width={150}
            height={100}
          />
        </CardHeader>

        <CardBody className="overflow-visible py-2">
          <p className="text-tiny uppercase font-bold">{country.name.official}</p>
          <small className="text-default-500"><b>Population</b> {country.population}</small>
          <small className="text-default-500"><b>Region</b> {country.region}</small>
          <small className="text-default-500"><b>Capitals</b> { country.capital.map(cap => cap) }</small>
        </CardBody>
      </Card>
  )
}



