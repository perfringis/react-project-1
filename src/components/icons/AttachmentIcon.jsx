import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const AttachmentIcon = () => {
  return (
    <div className='attachment-icon'>
      <FontAwesomeIcon icon={faLink} size='lg'/>
    </div>
  );
};

export default AttachmentIcon;
