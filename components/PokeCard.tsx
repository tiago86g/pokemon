import Link from 'next/Link'
import React from 'react'
import { PokemonType } from '../pages'

type PokeCardProps = {
  name: PokemonType['name']
  url: PokemonType['url']
  id: string
  pokemonId: number
}
export const PokeCard: React.FC<PokeCardProps> = ({name, url, id, pokemonId}) => {
  return (
    <Link href={`/pokemon?id=${pokemonId}`}>
      <a>
        <li key={id}>
          <p>{name}</p>
          <p>{url}</p>
          <p>{id}</p>
        </li>
      </a>
    </Link>
  )
}
