import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className='sidebar d-flex flex-column justify-content-between text-center'>
      <div className=''>
        <NavLink
          to="/home"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/billing"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="fa-solid fa-file-invoice-dollar"></i>
          <span>My Billing</span>
        </NavLink>
        <NavLink
          to="/settings"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="fa-solid fa-gear"></i>
          <span>Settings</span>
        </NavLink>
        <NavLink
          to="/help"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="fa-solid fa-circle-info"></i>
          <span>Help</span>
        </NavLink>
      </div>

      <div>
        <NavLink
          to="/logout"
          className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span>Log Out</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
