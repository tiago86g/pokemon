import React from 'react'
import { PokemonType } from '../pages/index'
type PokeCardProps = PokemonType
export const PokeCard: React.FC<PokeCardProps> = ({name, url}) => {
  return (
    <div>
      <p>{name}</p>
      <p>{url}</p>
    </div>
  )
}
