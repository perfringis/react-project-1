import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/images/face1.jpeg';
import image2 from '../assets/images/face2.jpeg';
import image3 from '../assets/images/face3.jpeg';

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
          <li className='avatar'>
            <img className='image' src={image1} alt='Logo' />
          </li>
          <li className='avatar'>
            <img className='image' src={image2} alt='Logo' />
          </li>
          <li className='avatar'>
            <img className='image' src={image3} alt='Logo' />
          </li>
          <li className='add-user'>
            <a href='#'>
              <FontAwesomeIcon icon={faUserPlus} size='lg' />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
