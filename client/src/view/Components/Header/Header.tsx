import { Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../App';
import { Icon } from '../../ui';
import { NavBar } from '../NavBar/NavBar';
import { iconsCounterStyles } from './Header.helper';

export const Header = observer(() => {
    window.addEventListener('scroll', () => (window.pageYOffset >= 120 ? setFixed(true) : setFixed(false)));
    const [fixed, setFixed] = useState(false);
    const { rootStore } = useContext(Context);
    const {
        cardStore: { cardItemLength, setCartPopup },
    } = rootStore;
    const navigate = useNavigate();
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
                <Link to={'/login'}>
                    <Icon name="profile" />
                </Link>
                <Box sx={{ position: 'relative' }}>
                    <Box sx={{ ...iconsCounterStyles }} component={'span'}>
                        {cardItemLength}
                    </Box>
                    <Icon name="heart" />
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <Box sx={{ ...iconsCounterStyles }} component={'span'}>
                        {cardItemLength}
                    </Box>
                    <Icon name="refresh" />
                </Box>
                <Box
                    sx={{ position: 'relative', cursor: 'pointer' }}
                    onClick={() => {
                        if (localStorage.getItem('token')) {
                            setCartPopup();
                        } else {
                            navigate('/login');
                        }
                    }}
                >
                    <Box sx={{ ...iconsCounterStyles }} component={'span'}>
                        {cardItemLength}
                    </Box>
                    <Icon name="cart" />
                </Box>
            </Stack>
        </Box>
    );
});
