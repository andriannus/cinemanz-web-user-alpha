import React, { useContext } from 'react';

import {
  faMapMarkedAlt,
  faPhone,
  faTv,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import TheaterContext from 'pages/theater/shared/services/theater.context';

export const Content = () => {
  const { theater } = useContext(TheaterContext);

  return (
    <nav className="panel is-dark">
      <p className="panel-heading">{theater ? theater.name : 'Detail'}</p>

      <p className="panel-block">
        <span className="panel-icon">
          <FontAwesomeIcon icon={faTv} />
        </span>
        {theater.name}
      </p>

      <p className="panel-block">
        <span className="panel-icon">
          <FontAwesomeIcon icon={faMapMarkedAlt} />
        </span>
        {theater.address ? theater.address : '-- No Data --'}
      </p>

      <p className="panel-block">
        <span className="panel-icon">
          <FontAwesomeIcon icon={faPhone} />
        </span>
        {theater.telephone ? theater.telephone : '-- No Data --'}
      </p>
    </nav>
  );
};

export default Content;
