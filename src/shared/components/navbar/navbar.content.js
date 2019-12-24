import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
  faCompass,
  faPlay,
  faRecordVinyl,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'shared/components/navbar/navbar.style.scss';

const Container = () => {
  return (
    <nav
      aria-label="main navigation"
      className="navbar is-fixed-top is-dark"
      role="navigation"
    >
      <div className="container">
        <NavbarBrand />
        <NavbarMenu />
      </div>
    </nav>
  );
};

const NavbarBrand = () => {
  return (
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        CinemaNz
      </Link>
    </div>
  );
};

const NavbarMenu = () => {
  return (
    <div className="navbar-menu">
      <div className="navbar-end">
        <NavLink
          activeClassName="is-active"
          className="navbar-item"
          to="/movie/now-playing"
        >
          <span className="icon">
            <FontAwesomeIcon icon={faPlay} />
          </span>

          <span>Now Playing</span>
        </NavLink>

        <NavLink
          activeClassName="is-active"
          className="navbar-item"
          to="/movie/upcoming"
        >
          <span className="icon">
            <FontAwesomeIcon icon={faRecordVinyl} />
          </span>

          <span>Upcoming</span>
        </NavLink>

        <NavLink
          activeClassName="is-active"
          className="navbar-item"
          to="/theater"
        >
          <span className="icon">
            <FontAwesomeIcon icon={faCompass} />
          </span>

          <span>Theater</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Container;
