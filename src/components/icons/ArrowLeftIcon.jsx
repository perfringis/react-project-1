import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const ArrowLeftIcon = () => {
  return (
    <div className='arrow-left-icon'>
      <FontAwesomeIcon icon={faArrowLeft} size='lg' />
    </div>
  );
};

export default ArrowLeftIcon;
