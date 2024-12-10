import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItem button key={item} component={Link} to={item.toLowerCase()} smooth={true} duration={500} onClick={handleDrawerToggle}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.95)' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#333' }}>
          Portfolio
        </Typography>
        {isMobile ? (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ color: '#333' }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <div>
            {menuItems.map((item) => (
              <Button
                key={item}
                component={Link}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                sx={{ color: '#333', mx: 1 }}
              >
                {item}
              </Button>
            ))}
          </div>
        )}
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {drawer}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
