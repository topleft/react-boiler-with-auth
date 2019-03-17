import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => {
  return (
    <div className='navbar'>
      {
        props.links.map(({path, label, className}, i) => (
          <div className='navbar__link'  key={i}>
            <NavLink
              className={className}
              to={path}>
              {label}
            </NavLink>
          </div>
        ))
      }
    </div>
  );
};

NavBar.propTypes = {
  links: PropTypes.arrayOf({
    path: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.element,
    ]).isRequired,
    className: PropTypes.string.isRequired,
  })
};

export default NavBar;
