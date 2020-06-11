import React, { Component } from 'react';

class NavBar extends Component {
   render() {
      return (
         <nav className="navbar navbar-light bg-warning mb-5">
            <a className="navbar-brand" href="#">
               Navbar <span className="badge badge-pill badge-secondary">{this.props.totalCounters}</span>
            </a>
         </nav>
      );
   }
}

export default NavBar;