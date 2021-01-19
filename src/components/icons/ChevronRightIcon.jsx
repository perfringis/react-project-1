import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ChevronRightIcon = () => {
  return (
    <div className='chevron-right-icon'>
      <FontAwesomeIcon icon={faChevronRight} size='lg' />
    </div>
  );
};

export default ChevronRightIcon;
