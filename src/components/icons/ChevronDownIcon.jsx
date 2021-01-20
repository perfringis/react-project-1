import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const ChevronDownIcon = () => {
  return (
    <div className='chevron-down-icon'>
      <FontAwesomeIcon icon={faChevronDown} size='lg' />
    </div>
  );
};

export default ChevronDownIcon;
