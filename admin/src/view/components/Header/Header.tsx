import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const Header = ({ currentPage }: { currentPage: string }) => {
    const [isOpen, setOpen] = useState(false);
    console.log(isOpen);
    return (
        <AppBar className={isOpen ? 'minified' : ''}>
            <Toolbar sx={{ bgcolor: '#081229' }}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => setOpen((prev) => !prev)}
                >
                    <MenuIcon />
                </IconButton>
                <Typography sx={{ textTransform: 'capitalize' }}>{currentPage ? currentPage : 'users'}</Typography>
            </Toolbar>
        </AppBar>
    );
};
