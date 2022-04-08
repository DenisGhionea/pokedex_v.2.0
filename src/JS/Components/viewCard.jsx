// React Stuff
import React from 'react';
import { Image } from 'react-img-placeholder';

// Custom Hooks & Helpers
import capitalize, { capitalizeAllWords } from '../Shared/capitalize.js';

// Components
import BaseCard from './baseCard.jsx';
import TypeCard from './typeCard.jsx';

// CSS
import '../../CSS/Components/viewCard.css';

// Media
import PokeBall from '../../Media/PokeBall.png';

function InfoBlock({ headerText, contentText }) {
  return (
    <span className="pokemon-info-block">
      <div className="pokemon-info-header">{headerText}</div>
      <div className="pokemon-info-content">{contentText}</div>
    </span>
  );
}

function ViewCard({ pokemon, species }) {
  function getPokemonTypeCards() {
    return pokemon.types.map((entry) => <TypeCard key={entry.slot} type={entry.type.name} />);
  }

  return (
    <BaseCard customClasses={`pokemon-artwork-card ${pokemon.types[0].type.name}`}>
      <div className="pokemon-artwork-card-header">
        <span className="pokemon-id-info">
          <div className="pokemon-name">{capitalize(pokemon.name)}</div>
          <div className="pokemon-id">
            #
            {pokemon.id.toString().padStart(3, '0')}
          </div>
        </span>

        <span className="pokemon-types-container">
          {getPokemonTypeCards()}
        </span>
      </div>

      <Image src={pokemon.sprites.other['official-artwork'].front_default} alt="Pokemon" width={400} height={400} placeholderSrc={PokeBall} />

      <div className="pokemon-info-container">
        <InfoBlock headerText="Weight" contentText={`${pokemon.weight / 10} kg`} />
        <InfoBlock headerText="Height" contentText={`${pokemon.height / 10} meters`} />
        <InfoBlock headerText="Color" contentText={`${capitalize(species?.color?.name)}`} />
        <InfoBlock headerText="Habitat" contentText={`${capitalizeAllWords(species?.habitat?.name)}`} />
        <InfoBlock headerText="Shape" contentText={`${capitalize(species?.shape?.name)}`} />
      </div>
    </BaseCard>
  );
}

export default ViewCard;
