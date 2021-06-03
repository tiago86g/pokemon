import Image from 'next/image'
import React from 'react'
import {
  PolarAngleAxis, PolarGrid,

  PolarRadiusAxis, Radar,
  RadarChart
} from 'recharts'
 
const data = [
  {
    subject: 'Math',
    A: 120,
    B: 110,
    fullMark: 150
  },
  {
    subject: 'Chinese',
    A: 110,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'English',
    A: 86,
    B: 130,
    fullMark: 150
  },
  {
    subject: 'Geography',
    A: 99,
    B: 100,
    fullMark: 150
  },
  {
    subject: 'Physics',
    A: 85,
    B: 90,
    fullMark: 150
  },
  {
    subject: 'History',
    A: 65,
    B: 85,
    fullMark: 150
  }
]

export default function StatusChart () {
  const pokemonId = 6 
  return (
    <div className={'w-full h-screen relative'}>
      <div
        className={'absolute top-0'}
      >
        <RadarChart
          cx={150}
          cy={150}
          outerRadius={150}
          width={500}
          height={500}
          data={data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey='subject' />
          <PolarRadiusAxis />
          <Radar
            name='Mike'
            dataKey='A'
            stroke='#8884d8'
            fill='#8884d8'
            fillOpacity={0.6}
            activeDot={true}
            dot= {true}
          />
        </RadarChart>
      </div>
      <div className={'absolute top-96 bg-blue-100'}>
        <Image 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`} 
          width={400} 
          height={400}
        />
      </div>
    </div>
  )
}
