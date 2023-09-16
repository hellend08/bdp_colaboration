// import { NavLink } from "react-router-dom";
import * as React from 'react';
// import Container from '@mui/material/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Dropdown from 'react-bootstrap/Dropdown';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {

    // const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    // const handleChange = (event) => {
    //   setAuth(event.target.checked);
    // };
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    logo
                {/* <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton> */}
                {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}> */}
                    {/* News */}
                {/* </Typography> */}
                    <Button color="inherit">Gestion</Button>
                    <Button color="inherit" onClick={handleMenu}>Nuevo</Button>
                    <Button color="inherit">Ayuda</Button>
                    <Button color="inherit">Acerca de</Button>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        // anchorOrigin={{
                        // vertical: 'bottom',
                        // horizontal: '',
                        // }}
                        keepMounted
                        // transformOrigin={{
                        // vertical: 'top',
                        // // horizontal: 'left',
                        // }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Proyecto FVC</MenuItem>
                        <MenuItem onClick={handleClose} >Proyecto Desarrollo</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
      );
    // return (
    //     <Navbar bg="primary" variant="dark">
    //         <Container>
    //             <Navbar.Brand href="/">Logo</Navbar.Brand>
    //             <Nav className="me-auto">
    //                 <NavLink to="/" ><Button>Gestión</Button></NavLink>
    //                 <Dropdown className="d-inline mx-2">
    //                     <Dropdown.Toggle id="dropdown-autoclose-true">
    //                         Nuevo
    //                     </Dropdown.Toggle>
    //                     <Dropdown.Menu className="nuevo-menu">
    //                         <div>
    //                             <NavLink to="/Nuevo_Proyecto_Desarrollo">Proyecto Desarrollo</NavLink>
    //                         </div>
    //                         <div>
    //                             <NavLink to="/Nuevo_Proyecto_FVC">Proyecto FVC</NavLink>
    //                         </div>
    //                     </Dropdown.Menu>
    //                 </Dropdown>
    //                 <Nav.Link href="#pricing">Ayuda</Nav.Link>
    //                 <Nav.Link href="#pricing">Acerca de</Nav.Link>
    //             </Nav>
    //         </Container>
    //     </Navbar>
    // );
}

export default Header;