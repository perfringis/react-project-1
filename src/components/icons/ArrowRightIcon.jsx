import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ArrowRightIcon = () => {
  return (
    <div className='arrow-right-icon'>
      <FontAwesomeIcon icon={faArrowRight} size='lg' />
    </div>
  );
};

export default ArrowRightIcon;
