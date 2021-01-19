import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

const ChartBarIcon = () => {
  return (
    <div className='chart-bar-icon'>
      <FontAwesomeIcon icon={faChartBar} size='lg' />
    </div>
  );
};

export default ChartBarIcon;
