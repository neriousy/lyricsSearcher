import React from 'react';
import { NavLink } from 'react-router-dom';
import NavElement from './NavElement';
import { Box, Divider, List, ListItem } from '@mui/material';

const Navbar = () => {

  return  (
    <>
      <Box component="header" sx={{
        width: '100%',
      }}>
        <Box component="nav">
          <List sx={{
            display: 'flex',
          }}>
            <NavElement path={'/'} description={'Home'} />  
            <NavElement path={'/search'} description={'Search'} />
          </List>
        </Box>
      </Box>
      <Divider sx={{
        height: '1px',
        marginBottom: '1rem'
      }}
      />
    </>
  );
};

export default Navbar;