import { Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Icon } from '../../ui';
import { footerLinkItems } from './Footer.helper';

export const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    padding: '90px',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr 1fr',
                    gap: '20px',
                }}
            >
                <Grid sx={{ fontFamily: 'var(--font-heading-family)', '& svg': { width: '25px', height: '25px' } }}>
                    <Typography variant="h6" component="div">
                        Our Information
                    </Typography>
                    <List sx={{ '& li': { padding: '5px 0' } }}>
                        <ListItem>
                            <ListItemIcon>
                                <Icon name="pin" />
                            </ListItemIcon>
                            <ListItemText primary="33 New Montgomery St. Ste 750 San Francisco, CA, USA 94105" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Icon name="headphone" />
                            </ListItemIcon>
                            <ListItemText primary="(+91)012-345-6789" />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Icon name="mail" />
                            </ListItemIcon>
                            <ListItemText primary="artistic@exampledemo.com" />
                        </ListItem>
                    </List>
                </Grid>
                {Object.entries(footerLinkItems).map(([key, value]: any[]) => (
                    <Grid key={Math.random()}>
                        <Typography variant="h6" component="div">
                            {key}
                        </Typography>
                        <List
                            sx={{
                                '& li': { padding: '5px 0' },
                            }}
                        >
                            {value.map((item: any) => (
                                <ListItem key={Math.random()}>
                                    <ListItemText
                                        primary={item}
                                        sx={{
                                            padding: '0 0 0 20px',
                                            position: 'relative',
                                            cursor: 'pointer',
                                            transition: 'color var(--base-transition)',
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                width: '10px',
                                                top: '10px',
                                                background: 'var(--color-base-text-3)',
                                                left: '2px',
                                                height: '1px',
                                            },
                                            '&::after': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                left: '5px',
                                                top: '7px',
                                                width: '6px',
                                                height: '6px',
                                                border: '1px solid var(--color-base-text-3)',
                                                borderWidth: '0 1px 1px 0',
                                                transform: 'rotate(315deg)',
                                            },
                                            '&:hover': {
                                                color: 'var(--color-base-text-3)',
                                            },
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Box>
            <Divider></Divider>
            <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} padding={'20px'}>
                <span>© 2023, Artistic - Art & Craft Store Powered By Shopify</span>
                <Stack direction={'row'} gap={'10px'} sx={{ '& svg': { width: '30px', height: '30px' } }}>
                    <Icon name="visa" />
                    <Icon name="mastercard" />
                    <Icon name="amex" />
                    <Icon name="visa" />
                    <Icon name="mastercard" />
                    <Icon name="amex" />
                </Stack>
            </Stack>
        </>
    );
};
