import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faExpandAlt } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';

import image1 from '../assets/images/face1.jpeg';
import image2 from '../assets/images/face2.jpeg';
import image3 from '../assets/images/face3.jpeg';

const SideNav = () => {
  return (
    <div>
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
      <header className='header'>
        <ul>
          <li style={{ width: 95 }}></li>
          <li>
            <div className='circle2'></div>
          </li>
          <li style={{ width: 14 }}></li>
          <li>Bank of America</li>
          <li style={{ width: 40 }}></li>
          <li>
            <div className='circle'>
              <a href='#'>
                <FontAwesomeIcon icon={faChartLine} size='lg' />
              </a>
            </div>
          </li>
          <li style={{ width: 22 }}></li>
          <li style={{ fontSize: 14 }}>
            <b>+3,08%</b>
          </li>
          <li style={{ width: 234 }}></li>
          <li>
            <div>
              <a href='#'>
                <FontAwesomeIcon icon={faSearch} size='lg' />
              </a>
            </div>
          </li>
          <li style={{ width: 263 }}></li>
          <li>
            <div>
              <a href='#'>
                <FontAwesomeIcon icon={faMoon} size='lg' />
              </a>
            </div>
          </li>
          <li style={{ width: 43 }}></li>
          <li>
            <div>
              <a href='#'>
                <FontAwesomeIcon icon={faBell} size='lg' />
              </a>
            </div>
          </li>
          <li style={{ width: 69 }}></li>
          <li>
            <div className='profile-avatar'>
              <img src={image3} alt='Logo' />

              <div className='add-circle'>
                <div className='add-circle-nested'>+</div>
              </div>
            </div>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default SideNav;
