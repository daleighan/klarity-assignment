import React from 'react';
import './sidebar.scss';

function Sidebar() {
  return (
    <div>
      <div>
        <img src="/logo.png" className="logo" alt="logo" />
      </div>
      <div className="nav-bar add-shadow">
        <div className="nav-btns">
          {[0, 1, 2, 3, 4, 5, 6].map(num => (
            <div key={num} className="horiz-center">
              <img className="menu-item" src="/menu.png" alt="menu-item" />
            </div>
          ))}
        </div>
        <div className="horiz-center">
          <img className="user-image" src="/user_image.png" alt="user" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
