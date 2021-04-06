import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';

import image1 from '../assets/images/face1.jpeg';
import image2 from '../assets/images/face2.jpeg';
import image3 from '../assets/images/face3.jpeg';

const SideNav = () => {
  return (
    <div>
      <div>
        <nav className='nav'>
          <ul>
            <li style={{ height: 102 }}>
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
                <FontAwesomeIcon icon={faChartLine} size='lg' />
              </a>
            </li>
            <li>
              <a href='#'>
                <FontAwesomeIcon icon={faBolt} size='lg' />
              </a>
            </li>
            <li style={{ height: 260 }}></li>
            <li style={{ height: 85 }}>
              <img className='image' src={image1} alt='Logo' />
            </li>
            <li style={{ height: 85 }}>
              <img className='image' src={image2} alt='Logo' />
            </li>
            <li style={{ height: 85 }}>
              <img className='image' src={image3} alt='Logo' />
            </li>
            <li style={{ height: 95 }}>
              <a href='#'>
                <FontAwesomeIcon icon={faUserPlus} size='lg' />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='main'>
        <div className='main-column'>
          <header className='header'>
            <ul>
              <li style={{ width: 95 }}></li>
              <li>
                <div className='company-logo'></div>
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
              <li style={{ width: 31 }}></li>
              <li>
                <div>
                  <a href='#'>
                    <FontAwesomeIcon icon={faAngleDown} size='lg' />
                  </a>
                </div>
              </li>
              <li style={{ width: 122 }}></li>
            </ul>
          </header>
          <div className='line'></div>
          <div className='content'>
            <div className='nested-content'>
              <div className='nested-content-left'></div>
              <div style={{ width: 111 }}></div>
              <div className='nested-content-right'></div>
            </div>
          </div>
        </div>

        <div className='sidenav'>
          <div className='navigate'>
            <div style={{ width: 38 }}></div>
            <div className='left-arrow'>
              <FontAwesomeIcon icon={faArrowLeft} size='lg' />
            </div>
            <div style={{ width: 212 }}></div>
            <div className='blue-circle'>
              <div className='plus-sign'>+</div>
            </div>
            <div style={{ width: 40 }}></div>
            <div>
              <a href='#'>
                <FontAwesomeIcon icon={faEllipsisH} size='lg' />
              </a>
            </div>
            <div style={{ width: 40 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
