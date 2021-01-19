import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';

const CommentIcon = () => {
  return (
    <div className='comment-icon'>
      <FontAwesomeIcon icon={faComment} size='lg' />
    </div>
  );
};

export default CommentIcon;
