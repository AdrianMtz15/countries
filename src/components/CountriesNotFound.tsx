'use client'

import type { HTMLAttributes } from "react";
import Image from "next/image";
import NotFoundImg from "../../public/not-found.png";

type Props = HTMLAttributes<HTMLDivElement>

export function CountriesNotFound({ ...htmlProps }: Props) {
  return(
    <div 
      className={`w-full  flex flex-col justify-between items-center`}
      {...htmlProps}
    > 
      <h2 className="text-[2rem] font-bold">No countries were found...</h2>
      <Image src={NotFoundImg} alt="No countries were found"/>
    </div>
  )
}