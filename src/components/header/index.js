import React from "react";
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';

import AccountMenu from '../accountMenu';


const Header = ({offset, handleMenuButton}) => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'white',
        width: { sm: `calc(100% - ${offset}px)` },
        ml: { sm: `${offset}px` },
      }}
    >
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={handleMenuButton}
          sx={{ mr: 2, display: { sm: "none" }, color:'#11192A' }}
        >
          <MenuIcon />
        </IconButton>
        <Typography sx={{color: 'black'}} variant="h6" noWrap component="div">
          IblueIt - Sistema Terapêutico
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <AccountMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
