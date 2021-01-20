import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';

const MarketIcon = () => {
  return (
    <div className='market-icon'>
      <FontAwesomeIcon icon={faExpandAlt} size='lg' />
    </div>
  );
};

export default MarketIcon;
