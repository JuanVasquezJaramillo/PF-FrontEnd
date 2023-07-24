import { NavLink } from "react-router-dom";
// import { useState } from "react";
import { useAuth } from "../context/authContext";
// import SearchBar from "./SearchBar/SearchBar";
import style from "../modules/navbar.module.css";
import { useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";

import Cart from "./Carrito/Cart";

const navbarStyles = {
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
};

const brandLinkStyles = {
  flexGrow: 1,
  fontWeight: "bold",
  color: "#fff",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "none",
  },
};

const linksContainerStyles = {
  display: "flex",
  alignItems: "center",
};

const logoutButtonStyles = {
  color: "#fff",
  marginLeft: "1rem",
  cursor: "pointer",
};
export default function Navbar() {
  const auth = useAuth();

  const [anchorEl, setAnchorEl] = useState(null);

  // funcion para cerrar session
  const handleSignout = () => {
    auth.logout();
    // dispatch(signOut());
  };
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position="static" style={navbarStyles} sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Typography variant="h6" style={brandLinkStyles} sx={{ flexGrow: 1 }}>
            <NavLink to="/">
              <h1 className={style.marca}>OnlyTrainers</h1>
            </NavLink>
          </Typography>
          <Box sx={{ display: "flex", gap: "10px" }}>
            {auth.user ? (
              <>
                <div style={linksContainerStyles}>
                  {/* Rutas de usuario logeado */}
                  <Button component={NavLink} to="/" color="inherit">
                    Home
                  </Button>
                  <Button component={NavLink} to="/trainingnew" color="inherit">
                    NuevaRutina
                  </Button>

                  {/* <Button component={NavLink} to="/training" color="inherit">
                    DetalleRutina
                  </Button> */}

                  <IconButton
                    onClick={handleMenuClick}
                    style={logoutButtonStyles}
                  >
                    <Avatar
                      alt="User Avatar"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBttWEpmEtrGbF96zdqAHT-csm7TPgKkIcQ&usqp=CAU"
                    />
                  </IconButton>
                </div>
                <Cart />
                {/*Menu desplegable */}
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                >
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/profile"
                  >
                    Perfil
                  </MenuItem>
                  <MenuItem
                    onClick={handleMenuClose}
                    component={NavLink}
                    to="/notifications"
                  >
                    Notificaciones
                  </MenuItem>
                  <MenuItem onClick={() => handleSignout()}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <>
                <div style={linksContainerStyles}>
                  {/* rutas usarios sin logearse */}
                  <Button component={NavLink} to="/" color="inherit">
                    Home
                  </Button>
                  <Button component={NavLink} to="/login" color="inherit">
                    Login
                  </Button>
                  <Button component={NavLink} to="/nosotros" color="inherit">
                    Nosotros
                  </Button>
                </div>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}
