import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const DotsIcon = () => {
  return (
    <div className='dots-icon'>
      <FontAwesomeIcon icon={faEllipsisH} size='lg' />
    </div>
  );
};

export default DotsIcon;
