import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
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

function TopAppBar() {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const user: SignedUser = useSelector((state: RootState) => state.user)
    const [shortMeun, setShortMeun] = React.useState<null | HTMLElement>(null);
    const [LoginMeun, setLoginMeun] = React.useState<null | HTMLElement>(null);
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setShortMeun(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setLoginMeun(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setShortMeun(null);
    };
    const handleCloseUserMenu = () => {
        setLoginMeun(null);
    };
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
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={shortMeun}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(shortMeun)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((page, index) => (
                                            <MenuItem key={index} onClick={handleCloseNavMenu}>
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
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'black', display: 'block' }} >
                                            {page.name}
                                        </Button>
                                    ))}
                                </Box>

                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={LoginMeun}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right'
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        open={Boolean(LoginMeun)}
                                        onClose={handleCloseUserMenu}

                                    >
                                        {settings.map((setting, index) => (
                                            <MenuItem key={index} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center" component="a" href={setting.link} >{setting.name}</Typography>
                                            </MenuItem>
                                        ))}
                                        <MenuItem onClick={() => {
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
export default TopAppBar;
