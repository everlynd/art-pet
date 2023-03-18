import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import { ListItemIcon } from '@mui/material';
import { Icon } from '../Icons/Icons';

export default function Sidebar() {
    return (
        <Box sx={{ width: 250, height: '100vh', background: '#081229', position: 'fixed', top: '60px' }}>
            <List
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    '& a': {
                        fontFamily: 'Roboto',
                        textDecoration: 'none',
                        color: '#fff',
                        padding: '10px 20px',
                        alignItems: 'center',
                        display: 'flex',
                        textTransform: 'capitalize',
                        transition: (theme) =>
                            theme.transitions.create('color', {
                                duration: '.3s',
                            }),
                        '&:hover': { color: '#607d8b' },
                        '&:hover svg': { fill: '#607d8b' },
                    },
                }}
            >
                {['users', 'products', 'product-create', 'categories'].map((elem) => (
                    <Link key={Math.random()} to={`/${elem}`}>
                        <ListItemIcon
                            sx={{
                                '& svg': { fill: 'white' },
                            }}
                        >
                            {<Icon name={`${elem}`} />}
                        </ListItemIcon>
                        {elem}
                    </Link>
                ))}
            </List>
        </Box>
    );
}
