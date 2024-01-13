import { Countries } from '@components/Countries'
import { MainHeader } from '@components/MainHeader';

const fetchCountries = async (): Promise<CountryData[]> => {
  const fields = 'name,capital,population,region,capital,flags'
  const res = await fetch(`https://restcountries.com/v3.1/all?fields=${fields}`);
  const countries = await res.json();

  return countries;
}

export default async function Home() {
  let data = await fetchCountries();

  return (
    <main className='relative w-full'>
      <MainHeader/>
      <Countries defaultCountries={data}
        className="grid grid-cols-4 w-full justify-between
        items-center justify-items-center max-w-[1100px] m-auto"
      />
    </main>
  )
}
