import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#3C096C', color: '#FAF1FF' }}
    >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Library Management
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={handleCloseDrawer}>
              <List>
                <ListItemButton
                  component={Link}
                  to="/"
                  onClick={handleCloseDrawer}
                >
                  <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/cart"
                  onClick={handleCloseDrawer}
                >
                  <ListItemText primary="Cart" />
                </ListItemButton>
                <ListItemButton
                  component={Link}
                  to="/history"
                  onClick={handleCloseDrawer}
                >
                  <ListItemText primary="Borrowing History" />
                </ListItemButton>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Button
              sx={{
                '&:hover': {
                  color: '#3C096C',
                  backgroundColor: '#FAF1FF',
                },
              }}
              color="inherit"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              sx={{
                '&:hover': {
                  color: '#3C096C',
                  backgroundColor: '#FAF1FF',
                },
              }}
              color="inherit"
              component={Link}
              to="/cart"
            >
              Cart
            </Button>
            <Button
              sx={{
                '&:hover': {
                  color: '#3C096C',
                  backgroundColor: '#FAF1FF',
                },
              }}
              color="inherit"
              component={Link}
              to="/history"
            >
              Borrowing History
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
