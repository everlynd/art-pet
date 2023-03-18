import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useState } from 'react';
import { Icon } from '../../ui';
import { NavBar } from '../NavBar/NavBar';

export const Header = () => {
    window.addEventListener('scroll', () => (window.pageYOffset >= 120 ? setFixed(true) : setFixed(false)));
    const [fixed, setFixed] = useState(false);
    return (
        <Box
            className={`${fixed ? 'header-fixed' : ''}`}
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 60px',
                boxShadow: '0 4px 16px rgb(0 0 0 / 15%)',
                top: '-100px',
            }}
        >
            <Stack
                direction={'row'}
                alignItems={'center'}
                gap={'10px'}
                sx={{ '& svg': { width: '50px', height: '50px' } }}
            >
                <Icon name="logo" />
                <Typography variant="h4">Artistic</Typography>
            </Stack>
            <NavBar />
            <Stack direction={'row'} gap={'20px'} sx={{ '& svg': { width: '26px', height: '26px' } }}>
                <Icon name="magnifier" />
                <Icon name="profile" />
                <Icon name="heart" />
                <Icon name="refresh" />
                <Icon name="cart" />
            </Stack>
        </Box>
    );
};
