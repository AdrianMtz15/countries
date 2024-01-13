'use client'
import {Switch} from "@nextui-org/react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/20/solid";

export default function Nav() {
  return(
    <nav className="flex flex-row w-full h-[10vh] items-center justify-between px-20 py3 shadow-md">
      <h1 className="text-[2rem] font-bold ">Where in the world?</h1>

      <Switch
        defaultSelected
        size="lg"
        classNames={{
          wrapper: 'group-data-[selected=true]:bg-dark-background w-[5rem] h-[2.5rem]',
          thumb: `w-[2rem] h-[2rem] group-data-[selected]:group-data-[pressed]:ml-10 
          group-data-[selected=true]:ml-10`,
          startContent: 'w-[1.5rem] h-[1.5rem]',
          endContent: 'w-[1.5rem] h-[1.5rem]'
        }}
        startContent={<SunIcon />}
        endContent={<MoonIcon />}
      >
        
      </Switch>

    </nav>
  )
}