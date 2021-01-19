import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';

const SideNav = () => {
  return (
    <div>
      <nav className='nav'>
        <ul>
          <li className='logo'>
            <a href='#'>
              <FontAwesomeIcon icon={faLink} size='lg' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faCompass} size='lg' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faStar} size='lg' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faComment} size='lg' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faExpandAlt} size='lg' />
            </a>
          </li>
          <li>
            <a href='#'>
              <FontAwesomeIcon icon={faBolt} size='lg' />
            </a>
          </li>
          <li className='gap'></li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
