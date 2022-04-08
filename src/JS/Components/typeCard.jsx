// React Stuff
import React from 'react';
import { Image } from 'react-img-placeholder';

// Custom Hooks & Helpers
import capitalize from '../Shared/capitalize.js';
import getTypeIcon from '../Shared/getTypeIcon.js';

// CSS
import '../../CSS/Components/typeCard.css';

// Media
import pokeBall from '../../Media/PokeBall.png';

function TypeCard({ type }) {
  const icon = getTypeIcon(type);
  return (
    <span className="type-card-container">
      {/* <img className="type-icon" src={icon} alt="Pokemon type icon" /> */}
      <Image src={icon} alt="Pokemon type icon" width={12} height={12} placeholderSrc={pokeBall} />
      {capitalize(type)}
    </span>
  );
}

export default TypeCard;
