import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const AddUserIcon = () => {
  return (
    <div className='add-user-icon'>
      <FontAwesomeIcon icon={faUserPlus} size='lg' />
    </div>
  );
};

export default AddUserIcon;
