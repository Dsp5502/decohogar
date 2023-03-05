import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import HomeIcon from '@mui/icons-material/Home';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

export const getIconText = (text) => {
  console.log(text);
  switch (text) {
    case 'Inicio':
      return <HomeIcon />;
    case 'Ventas':
      return <MonetizationOnIcon />;
    case 'Clientes':
      return <PersonIcon />;
    case 'Items':
      return <ShoppingCartIcon />;
    case 'LogOut':
      return <LogoutIcon />;
    default:
      return <DisabledByDefaultIcon />;
  }
};
