import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MarketIcon = () => {
  return (
    <div className='search-icon'>
      <FontAwesomeIcon icon={faSearch} size='lg' />
    </div>
  );
};

export default MarketIcon;
