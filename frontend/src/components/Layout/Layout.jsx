import React, { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';

const drawerWidth = 240; // Set the width of the sidebar

const Layout = ({ children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <CssBaseline />
      <Header onDrawerToggle={handleDrawerToggle} />
      <Box sx={{ display: 'flex', flex: 1 }}>
        <Sidebar
          drawerWidth={drawerWidth}
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
        />
        <Box
          component="main"
          sx={{
            flex: 1,
            p: 3,
            marginLeft: { sm: `${drawerWidth}px` }, // Add margin to the main content area for larger screens
            width: { sm: `calc(100% - ${drawerWidth}px)` }, // Adjust the width of the main content area for larger screens
          }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;