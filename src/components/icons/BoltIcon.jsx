import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const BoltIcon = () => {
  return (
    <div className='bolt-icon'>
      <FontAwesomeIcon icon={faBolt} size='lg' />
    </div>
  );
};

export default BoltIcon;
