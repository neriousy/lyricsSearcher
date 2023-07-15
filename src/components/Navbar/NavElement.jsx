import { Link, ListItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavElement = ({path, description}) => {
  
  return (
    <ListItem sx={{width: 'unset'}}>
      <Link component={NavLink} to={path} 
        sx={{
          color: '#007FFF', 
          fontSize: '1.5em',
          padding: '0.25rem',
          fontWeight: '300',
          textDecoration: 'none',
          '&:hover': {  
            textDecoration: 'underline',
          },
      
        }}>
        {description}
      </Link>
    </ListItem>
  );

};

export default NavElement;