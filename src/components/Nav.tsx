'use client'
import {Switch} from "@nextui-org/react";
import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/20/solid";
import { useStore } from '@src/store';

export default function Nav() {
  const setDarkMode = useStore(state => state.setDarkMode);
  const darkMode = useStore(state => state.darkMode);
  
  return(
    <nav 
      className={`flex flex-row w-full h-[10vh] items-center 
      justify-between py shadow-md ${darkMode ? 'shadow-slate-800' : ''}`}
    >
      <h1 className="text-[2rem] font-bold ">Where in the world?</h1>

      <Switch
        defaultSelected
        size="lg"
        onClick={() => setDarkMode(!darkMode)}
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