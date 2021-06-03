import axios from 'axios'
import _ from 'lodash'
import { GetServerSideProps } from 'next'
import React from 'react'
import { PokeOverview } from '../components/PokeOverview'

const getSinglePokemon = async (id: string) => {
  const { data } = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${id}`
  )
  return data
}

export const getServerSideProps: GetServerSideProps = async ({query}) => {
  //fix it
  if (!_.isString(query.id)) {
    return {props: {}}
  }
  const data = await getSinglePokemon(query.id)
  return {
    props: { data },
  }
}

export const PokemonPage = ({data}: { data: unknown }) => {
  return (
    <div>
      <PokeOverview pokemon={data}/>
    </div>
  )
}

export default PokemonPage