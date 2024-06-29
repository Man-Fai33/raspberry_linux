import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CottageIcon from '@mui/icons-material/Cottage';
import { useNavigate } from 'react-router';
import { SignedUser } from '../models/userModels';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, clearUser } from './redux/store';

const pages = [
    { "name": '主頁', "link": "/home" },

]
const settings = [
    { "name": '帳號', "link": "/account" },
    // { "name": 'Account', "link": "/" },
    // { "name": 'Dashboard', "link": "/" },
]

export default function TopAppBar() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const data : SignedUser= useSelector((state: RootState) => state.user)
    const [user,setUser] = useState<SignedUser>(data)
    const [shortMenu, setShortMenu] = React.useState<null | HTMLElement>(null);
    const [LoginMenu, setLoginMenu] = React.useState<null | HTMLElement>(null);

    const handleUserMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setLoginMenu(event.currentTarget);
    };

    const handleShortMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setShortMenu(event.currentTarget);
    };

    const handleUserMenuClose = () => {
        setLoginMenu(null);
    };

    const handleShortMenuClose = () => {
        setShortMenu(null);
    };


    useEffect(() => {
        setUser(data)
    }, [data]);



    return (
        <>
            {
                user.token !== "" ?
                    <div className='static shadow-lg  rounded-full  '>
                        <Container style={{ minWidth: "80%" }} >
                            <Toolbar disableGutters>
                                <CottageIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                                <Typography
                                    variant="h6"
                                    noWrap
                                    component="a"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    CMF
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleShortMenuOpen}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={shortMenu}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(shortMenu)}
                                        onClose={handleShortMenuClose}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page, index) => (
                                            <MenuItem key={index} onClick={handleShortMenuClose}>
                                                <a href={page.link}> <Typography textAlign="center">{page.name}</Typography></a>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                <CottageIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                                <Typography
                                    variant="h5"
                                    noWrap
                                    component="a"
                                    href="#app-bar-with-responsive-menu"
                                    sx={{
                                        mr: 2,
                                        display: { xs: 'flex', md: 'none' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 700,
                                        letterSpacing: '.3rem',
                                        color: 'inherit',
                                        textDecoration: 'none',
                                    }}
                                >
                                    {/* LOGO */} CMF
                                </Typography>
                                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((page, index) => (
                                        <Button

                                            key={index}
                                            onClick={() => {
                                                setShortMenu(null)
                                                navigator(page.link)
                                            }}
                                            sx={{ my: 2, color: 'black', display: 'block' }} >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>

                                <Box sx={{ flexGrow: 0 }}>

                                    <IconButton onClick={handleUserMenuOpen} sx={{ p: 0 }}>
                                        <Avatar src={user.iconUrl} />
                                    </IconButton>

                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="simple-menu"
                                        anchorEl={LoginMenu}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        open={Boolean(LoginMenu)}
                                        onClose={handleUserMenuClose}

                                    >
                                        {settings.map((setting, index) => (
                                            <MenuItem key={index} onClick={handleUserMenuClose} >
                                                <Typography textAlign="center" component="a" href={setting.link} >{setting.name}</Typography>
                                            </MenuItem>
                                        ))}
                                        <MenuItem onClick={() => {
                                            setLoginMenu(null);
                                            dispatch(clearUser())
                                            navigator('/')
                                        }}>登出</MenuItem>


                                    </Menu>
                                </Box>
                            </Toolbar>
                        </Container>
                    </div> : <></>}
        </>
    );
}
