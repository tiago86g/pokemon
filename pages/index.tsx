import React from 'react'
import { PokeCardsList } from '../components/PokeCardsList'
import { SinglePokemonProp } from '../components/PokeOverview'
import { PokeTeam } from '../components/PokeTeam'

export type PokemonType = {
  name: string,
  url: string
} 

type PokeHomeProps = {
  pokemonsData: PokemonType[]
  pokeTeamData: SinglePokemonProp
}

const PokeHome: React.FC<PokeHomeProps> = ({
  pokemonsData, pokeTeamData
}) => {

  return <div className={'bg-red-500 flex'}>
    {!!pokeTeamData && <PokeTeam />}
    <PokeCardsList pokemonsData={pokemonsData}/>
  </div>
}

export default PokeHome