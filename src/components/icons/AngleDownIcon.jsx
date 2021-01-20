import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AngleDownIcon = () => {
  return (
    <div className='angle-down-icon'>
      <FontAwesomeIcon icon={faAngleDown} size='lg' />
    </div>
  );
};

export default AngleDownIcon;
