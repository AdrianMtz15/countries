declare type CountryData = {
  name: {
    common: string,
    official: string
  },
  imgSrc: string,
  population: number,
  region: string,
  capital: Array<string>,
  flags: {
    png: string
  }
}