import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const ChevronLeftIcon = () => {
  return (
    <div className='chevron-left-icon'>
      <FontAwesomeIcon icon={faChevronLeft} size='lg' />
    </div>
  );
};

export default ChevronLeftIcon;
