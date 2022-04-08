// React Stuff
import React from 'react';

// CSS
import '../../CSS/Components/baseCard.css';

function BaseCard({ customClasses, children }) {
  return (
    <div className="card-container">
      <div className={customClasses}>
        {children}
      </div>
    </div>
  );
}

export default BaseCard;
