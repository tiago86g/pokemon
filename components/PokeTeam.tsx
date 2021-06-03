import React from 'react'
import StatusChart from './StautsChart'

interface Props {
  
}

export const PokeTeam = (props: Props) => {
  return (
    <div className={'w-1/4 bg-red-200'}>
      <StatusChart />
    </div>
  )
}
