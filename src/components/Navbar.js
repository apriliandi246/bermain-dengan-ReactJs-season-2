import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ totalCounters }) => {
   return (
      <nav className="navbar navbar-light bg-warning mb-5">
         <a className="navbar-brand" href="/#">
            Navbar <span className="badge badge-pill badge-secondary">{totalCounters}</span>
         </a>
      </nav>
   );
}

Navbar.propTypes = {
   totalCounters: PropTypes.number.isRequired
}

export default Navbar;