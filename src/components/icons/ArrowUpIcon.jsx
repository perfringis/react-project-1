import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ArrowUpIcon = () => {
  return (
    <div className='arrow-up-icon'>
      <FontAwesomeIcon icon={faArrowUp} size='lg' />
    </div>
  );
};

export default ArrowUpIcon;
