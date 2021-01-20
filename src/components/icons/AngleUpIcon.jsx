import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const AngleUpIcon = () => {
  return (
    <div className='angle-up-icon'>
      <FontAwesomeIcon icon={faAngleUp} size='lg' />
    </div>
  );
};

export default AngleUpIcon;
