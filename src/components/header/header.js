import React from 'react';
import './header.scss';

function Header({search}) {
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
        <div>
          <img src="/search.png" alt="" className="search-image" />
          <span>
            <input
              onChange={e => search(e.target.value)}
              className="search-box"
              type="text"
              placeholder="Search..."
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
