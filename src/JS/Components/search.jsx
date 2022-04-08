// React Stuff
import React from 'react';

// CSS
import '../../CSS/Components/search.css';

function Search({ placeholder, value, setValue }) {
  return (
    <input
      placeholder={placeholder}
      maxLength="33"
      className="searchBar"
      onChange={(event) => setValue(event.target.value)}
      value={value}
    />
  );
}

export default Search;