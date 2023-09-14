import { Countries } from '@/components/Countries'

export default function Home() {
  return (
    <main className='relative w-full'>
      <Countries 
        className="grid grid-cols-4 w-full justify-between
        items-center justify-items-center"
      />
    </main>
  )
}
