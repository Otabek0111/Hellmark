// Layout.jsx
import React from 'react';
import Navbar from './Navbar'; // Update the import path

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
