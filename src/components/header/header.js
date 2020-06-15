import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className="header-outer">
      <div className="titles">
        <div>
          <img src="/school.png" alt="school" className="title-image" />
          School: <b>New Westeros Elementary</b>
        </div>
        <div>
          <img src="/people.png" alt="people" className="title-image" />
          Site Coordinator: <b>Debra Graham</b>
        </div>
      </div>
      <div className="search">
        <input type="text" placeholder="search"/>
      </div>
    </div>
  );
}

export default Header;
