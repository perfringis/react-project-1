import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';

const StarIcon = () => {
  return (
    <div className='star-icon'>
      <FontAwesomeIcon icon={faStar} size='lg' />
    </div>
  );
};

export default StarIcon;
