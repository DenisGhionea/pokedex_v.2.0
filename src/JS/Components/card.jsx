// <div className={`preview-card ${pData.types[0].type.name}`}>  --> De ce aici nu trebui facut un arrow function cu .map 
// pData.types.map(pokemonClass => --> Dar aici trebuie

import React from 'react'
import pokemonData from '../../data.json'
import '../../CSS/Components/previewCard.css'
import '../../CSS/Shared/pokemonTypes.css'
import capitalize from '../Shared/capitalize.js'

function Card() {

  return (
    pokemonData.map(pData => {
      return(
    <div className='card-container'>
    <div className={`preview-card ${pData.types[0].type.name}`}>
      <div className='card-content'>

        <div className='card-header'>
          <h3>{capitalize(pData.name)}</h3>
          <h4>
          #
          {pData.id.toString().padStart(3, '0')}
          </h4>
        </div>

        <div className='card-body'>
          <div className='pokemon-types-wrapper'>
            { pData.types.map(pokemonClass => {
                return(
                  <span className='type-card-container'>
                    {pokemonClass.type.name}
                  </span>
                )
                })}
          </div>
          <div className='pokemon-photo'>
            <img src={pData.sprites.other.official_artwork.front_default} />
          </div>
        </div>

      </div>
    </div>
    </div>
      )})
  )
}

export default Card;