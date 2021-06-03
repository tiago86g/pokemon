import React from 'react'
import { PokeCardsLIst } from '../components/PokeCardsLIst'

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
    <PokeCardsLIst pokemonsData={pokemonsData}/>
  </div>
}

export default PokeHome