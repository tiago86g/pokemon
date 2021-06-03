import React from 'react'
import { PokemonType } from '../pages/index'
import { PokeCard } from './PokeCard'

type PokeCardsLIstProps = {
  pokemonsData: PokemonType[]
}

export const PokeCardsLIst: React.FC<PokeCardsLIstProps> = ({ pokemonsData }) => {
  const cardList = pokemonsData.map(({ name, url })=>(
    <PokeCard
      name={name}
      url={url}
    />
  ))

  return (
    <ul>
      {cardList}
    </ul>
  )
}
