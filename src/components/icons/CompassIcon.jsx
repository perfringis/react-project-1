import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

const CompassIcon = () => {
  return (
    <div className='compass-icon'>
      <FontAwesomeIcon icon={faCompass} size='lg' />
    </div>
  );
};

export default CompassIcon;
