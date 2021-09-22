import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faComment } from '@fortawesome/free-regular-svg-icons';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Face1 from '../assets/images/face1.jpeg';
import Face2 from '../assets/images/face2.jpeg';
import Face3 from '../assets/images/face3.jpeg';

const Dashboard = () => {
  return (
    <div className='main'>
      <div className='left-navbar'>
        <div className='logo-attachment'>
          <FontAwesomeIcon icon={faLink} size='lg' />
        </div>

        <div className='left-navbar-menu'>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faCompass} size='lg' />
          </div>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faStar} size='lg' />
          </div>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faComment} size='lg' />
          </div>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faLevelUpAlt} size='lg' />
          </div>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faBolt} size='lg' />
          </div>
        </div>

        <div className='left-navbar-friend-list'>
          <img className='friend-list-avatar' src={Face1}></img>
          <img className='friend-list-avatar' src={Face2}></img>
          <img className='friend-list-avatar' src={Face3}></img>
          <div className='menu-icon'>
            <FontAwesomeIcon icon={faUserPlus} size='lg' />
          </div>
        </div>
      </div>

      <div className='left-navbar-border'></div>
      <div className='main-panel'></div>
      <div className='right-navbar'></div>
    </div>
  );
};

export default Dashboard;
