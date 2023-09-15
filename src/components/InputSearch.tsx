'use client'
import { Input } from '@nextui-org/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import type { InputProps } from '@nextui-org/react'

export function InputSearch({ className, ...inputProps }: InputProps) {
  return(
    <Input 
      className={`w-[25vw]  ${className}`}
      radius='none'
      type="text" 
      variant={'faded'} 
      placeholder="Search for a country..." 
      startContent={<MagnifyingGlassIcon width={24}/> }
      {...inputProps}
    />
  )
}