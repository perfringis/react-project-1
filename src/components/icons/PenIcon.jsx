import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

const PenIcon = () => {
  return (
    <div className='pen-icon'>
      <FontAwesomeIcon icon={faPen} size='lg' />
    </div>
  );
};

export default PenIcon;
