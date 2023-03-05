import React from 'react';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import { getIconText } from '../../../helpers/getIconText';

export const ListNav = (anchor, toggleDrawer) => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  const goComponent = (text) => {
    switch (text) {
      case 'Inicio':
        navigate('/', { replace: true });
        break;
      case 'Ventas':
        navigate('/sales', { replace: true });
        break;
      case 'Clientes':
        navigate('/clients', { replace: true });
        break;
      case 'Items':
        navigate('/items', { replace: true });
        break;
      case 'Logout':
        logout();
        break;
      default:
        break;
    }
  };

  return (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inicio', 'Ventas', 'Clientes', 'Items'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => goComponent(text)}>
              <ListItemIcon>{getIconText(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['LogOut'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={logout}>
              <ListItemIcon>{getIconText(text)}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
