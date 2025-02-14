import * as React from "react";
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from "react-router";

const drawerWidth = 240;
// const navItems = ['Home', 'Services', 'Reviews', 'Contacts'];

const navItems = [
    { menu: 'Home', path: '/' },
    { menu: 'Services', path: '/services' },
    { menu: 'Reviews', path: '/reviews' },
    { menu: 'Contacts', path: '/contacts' },
];


export default function NavBar() {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Cegnev
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.menu} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <NavLink to={item.path} className={({ isActive }) => isActive ? "active" : ""}>
                                {item.menu}
                            </NavLink>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <Box sx={{
            display: 'flex',
            bgcolor: '#212121'
        }}>
            <CssBaseline />
            <AppBar component="nav"
                sx={{
                    bgcolor: '#212121'
                }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        Cegnev
                    </Typography>
                    <Box sx={{
                        display: { xs: 'none', sm: 'block' }
                    }} className='nav'>
                        {navItems.map((item) => (
                            <li>
                                <NavLink key={item.menu} to={item.path} className={({ isActive }) => isActive ? "active" : ""}>
                                    {item.menu}
                                </NavLink>
                            </li>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
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
            </nav>
        </Box >
    );
}