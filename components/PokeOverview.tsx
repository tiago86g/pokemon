import React from 'react'

export type SinglePokemonProp = any

export const PokeOverview:React.FC<SinglePokemonProp> = ({pokemon}) => {
  return (
    <div>
      <p>{pokemon.forms[0].name}</p>
    </div>
  )
}
