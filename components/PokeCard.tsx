import Image from 'next/image'
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
    <li key={id}>
      <Link href={`/pokemon?id=${pokemonId}`}>
        <a>
          <div>
            <p>{name}</p>
            <p>{url}</p>
            <Image 
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} 
              width={200} 
              height={200}
            />
          </div>
        </a>
      </Link>
      <button>
        <p>+ add to team</p>
      </button>
    </li>
  )
}
