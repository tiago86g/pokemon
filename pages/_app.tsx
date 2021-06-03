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
  // const pokemonData = pokemons.map((pokemon, index: number)=>{
  //   const pokemonId = index + 1
  //   const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
  //   return {
  //     ...pokemon,
  //     image
  //   }
  // })
  useEffect(()=>{
    getAllPokemons(url)
  }, [])
  return <Component {...pageProps} pokemonsData={pokemonsData}/>
}
export default MyApp