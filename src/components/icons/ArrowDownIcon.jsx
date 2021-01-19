import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ArrowDownIcon = () => {
  return (
    <div className='arrow-down-icon'>
      <FontAwesomeIcon icon={faArrowDown} size='lg' />
    </div>
  );
};

export default ArrowDownIcon;
