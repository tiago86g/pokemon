import axios from 'axios'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import '../styles/globals.css'


function MyApp ({ Component, pageProps }: AppProps) {
  const [pokemonsData, setPokemonsData] = useState([])
  const url = 'https://pokeapi.co/api/v2/pokemon/?limit=649'
  
  const getAllPokemons = async (url: string) =>{
    const { data } = await axios.get(url)
    setPokemonsData(data.results)
  }

  useEffect(()=>{
    getAllPokemons(url)
  }, [])
  return <Component {...pageProps} pokemonsData={pokemonsData}/>
}
export default MyApp