import { Countries } from '@/components/Countries'
import { InputSearch } from '@/components/InputSearch'
import { SelectRegion } from '@/components/SelectRegion'

export default function Home() {
  return (
    <main className='relative w-full'>
      <section className='flex flex-row w-full items-end justify-between px-[10vw]'>
        <InputSearch 
          className='mt-[35px]'
          classNames={{
            input: 'bg-light-background text-light-text text-[1.5rem]',
            inputWrapper: 'bg-light-background border shadow-lg'
          }}
        />

        <SelectRegion/>
          
      </section>
      <Countries 
        className="grid grid-cols-4 w-full justify-between
        items-center justify-items-center max-w-[1100px] m-auto"
      />
    </main>
  )
}
