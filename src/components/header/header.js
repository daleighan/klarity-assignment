import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header-outer">
      {/*<div>
        <img src="/logo.png" className="logo" alt="logo" />
      </div>*/}
        <div className="titles">
          <div>School: <b>New Westeros Elementary</b></div>
            <div>Site Coordinator: <b>Debra Graham</b></div>
        </div>
    </div>
  );
}

export default Header;
