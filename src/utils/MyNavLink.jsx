import React from 'react';
import { NavLink } from 'react-router-dom';

function MyNavLink({ to, children }) {
  return (
    <NavLink 
      to={to} 
      style={({ isActive }) => ({
        color: isActive ? 'red' : 'blue'
      })}
    >
      {children}
    </NavLink>
  );
}

export default MyNavLink;
