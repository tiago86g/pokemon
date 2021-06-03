import React from 'react'
import { PokeCardsList } from '../components/PokeCardsList'

export type PokemonType = {
  name: string,
  url: string
} 

type PokeHomeProps = {
  pokemonsData: PokemonType[]
}

const PokeHome: React.FC<PokeHomeProps> = ({
  pokemonsData
}) => {

  return <div className={'bg-red-500'}>
    <PokeCardsList pokemonsData={pokemonsData}/>
  </div>
}

export default PokeHome