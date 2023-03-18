import { Grid, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../App';

export const NavBar = observer(() => {
    const { rootStore } = useContext(Context);
    const {
        categoriesStore: { getAllCategories, categories },
        productsStore: { getAllProducts, products}
    } = rootStore;
    useEffect(() => {
        getAllCategories();
        getAllProducts();
    }, [getAllCategories, getAllProducts]);
    return (
        <Box
            sx={{
                '& a': {
                    textDecoration: 'none',
                    color: 'var(--base-color-text)',
                    fontWeight: '500',
                    fontSize: 'var(--nav-font-size)',
                    transition: 'color var(--base-transition)',
                    '&:hover': {
                        color: 'var(--color-base-text-3)',
                    },
                },
                display: 'flex',
                alignItems: 'center',
                gap: '50px',
            }}
        >
            <Link to={'/'}>Home</Link>
            <Box
                sx={{
                    position: 'relative',
                    '&:hover > .dropdown': {
                        maxHeight: '500px',
                        visibility: 'visible',
                        transition: 'max-height var(--base-transition)',
                    },
                }}
            >
                <Link to={'/design'}>Design </Link>
                <Box
                    className="dropdown"
                    sx={{
                        position: 'absolute',
                        maxHeight: '0',
                        transition: 'max-height var(--base-transition)',
                        overflow: 'scroll',
                        background: 'white',
                        border: '1px solid var(--color-base-border)',
                        borderRadius: 'var(--base-radius)',
                        padding: '10px',
                        zIndex: '2',
                        top: '25px',
                        left: '-72px',
                        visibility: 'hidden',
                    }}
                >
                    {categories ? (
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                                gap: '20px',
                                alignItems: 'flex-start',
                            }}
                        >
                            {categories.map((elem) =>
                                elem.children.length ? (
                                    <Grid
                                        key={Math.random()}
                                        sx={{
                                            '& a': {
                                                transition: 'color var(--base-transition)',
                                                '&:hover': { color: 'var(--color-base-text-3)' },
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                width: '230px',
                                                '& a': {
                                                    fontSize: 'var(--nav-font-size)',
                                                    fontWeight: '600',
                                                },
                                            }}
                                        >
                                            <Link to={elem.url}>{elem.title}</Link>
                                        </Typography>
                                        <List
                                            sx={{
                                                '& li': { padding: '5px 0' },
                                                '& a': { fontSize: 'var(--small-font-size)' },
                                            }}
                                        >
                                            {elem.children
                                                ? elem.children.map((item: any) => (
                                                      <ListItem key={Math.random()}>
                                                          <Link to={`catalog/${item.url}`}>{item.title}</Link>
                                                      </ListItem>
                                                  ))
                                                : null}
                                        </List>
                                    </Grid>
                                ) : null,
                            )}
                        </Box>
                    ) : null}
                </Box>
            </Box>
            <Link to={'/handprint'}>Handprint</Link>
            <Link to={'/ikebana'}>Ikebana</Link>
            <Link to={'/contact'}>Contact us</Link>
            <Link to={'/Blog'}>Blog</Link>
        </Box>
    );
});
