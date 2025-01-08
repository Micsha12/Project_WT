import React from 'react';
import { Drawer, List, ListItem, ListItemText, Hidden } from '@mui/material';
import { Link } from 'react-router-dom';

const Sidebar = ({ drawerWidth, mobileOpen, handleDrawerToggle }) => {
  const drawer = (
    <List>
      <ListItem button component={Link} to="/dashboard">
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to="/login">
        <ListItemText primary="Login" />
      </ListItem>
      <ListItem button component={Link} to="/register">
        <ListItemText primary="Register" />
      </ListItem>
      <ListItem button component={Link} to="/attendance"> {/* Add Attendance link */}
        <ListItemText primary="Attendance" />
      </ListItem>
      {/* Add more navigation items as needed */}
    </List>
  );

  return (
    <>
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </>
  );
};

export default Sidebar;