import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const ChevronUpIcon = () => {
  return (
    <div className='chevron-up-icon'>
      <FontAwesomeIcon icon={faChevronUp} size='lg' />
    </div>
  );
};

export default ChevronUpIcon;
