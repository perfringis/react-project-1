import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';

const BellIcon = () => {
  return (
    <div className='bell-icon'>
      <FontAwesomeIcon icon={faBell} size='lg' />
    </div>
  );
};

export default BellIcon;
