import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';

const MoonIcon = () => {
  return (
    <div className='moon-icon'>
      <FontAwesomeIcon icon={faMoon} size='lg' />
    </div>
  );
};

export default MoonIcon;
