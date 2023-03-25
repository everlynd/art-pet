import { Divider, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../App';
import { BASE_URL } from '../../../data/api/useAxios';
import { Button } from '../../ui';
import { Input } from '../../ui/Input/Input';
import { localePrice } from '../ProductPage/ProductPage.helper';

export const PaymentPage = observer(() => {
    const { rootStore } = useContext(Context);
    const {
        cardStore: { cardItems, getCartItems, cardTotalPrice },
    } = rootStore;
    useEffect(() => {
        if (!cardItems.length) {
            getCartItems();
        }
    }, [cardItems, getCartItems]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    });
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Box
                sx={{
                    padding: '50px 50px 20px 100px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    '& form': {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    },
                }}
            >
                <Typography>Shipping address</Typography>
                <form>
                    <Input>Country/Region</Input>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Input>First Name</Input>
                        <Input>Last Name</Input>
                    </Box>
                    <Input>Address</Input>
                    <Input>Apartment, suite, etc. (optional)</Input>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                        <Input>City</Input>
                        <Input>State</Input>
                        <Input>ZIP Code</Input>
                    </Box>
                </form>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        '& a': {
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            '&::before': {
                                content: '""',
                                width: '10px',
                                height: '10px',
                                display: 'block',
                                border: '2px solid black',
                                borderRight: 'none',
                                borderBottom: 'none',
                                transform: 'rotate(315deg)',
                            },
                        },
                    }}
                >
                    <Link to="/cart">
                        <Typography>Return to cart</Typography>
                    </Link>
                    <Button
                        appearance="primary"
                        onClick={() => {
                            alert('ну собственна на этом всё');
                        }}
                    >
                        <Typography>Continue to shipping</Typography>
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    padding: '50px 100px 20px 50px',
                    background: '#f5f5f5',
                    height: '100vh',
                    borderLeft: '1px solid #e0e0e0',
                }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {cardItems && cardItems.length
                        ? cardItems.map((elem) => (
                              <Box key={Math.random()} sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                  <Box
                                      data-counter={elem.quantity}
                                      sx={{
                                          width: '70px',
                                          height: '70px',
                                          border: '1px solid var(--color-base-border)',
                                          borderRadius: '6px',
                                          position: 'relative',
                                          '&::before': {
                                              content: 'attr(data-counter)',
                                              display: 'flex',
                                              alignItems: 'center',
                                              justifyContent: 'center',
                                              width: '20px',
                                              height: '20px',
                                              position: 'absolute',
                                              borderRadius: '50%',
                                              color: 'white',
                                              fontSize: '12px',
                                              background: 'var(--color-accent-1)',
                                              top: '-10px',
                                              right: '-10px',
                                          },
                                          '& img': {
                                              objectFit: 'contain',
                                              width: '100%',
                                              height: '100%',
                                              borderRadius: '6px',
                                          },
                                      }}
                                  >
                                      <img src={BASE_URL + elem.product.images[0]} />
                                  </Box>
                                  <Box>{elem.product.title}</Box>
                                  <Box sx={{ marginLeft: 'auto' }}>
                                      {localePrice(
                                          elem.product.discount_price
                                              ? String(+elem.product.discount_price * +elem.quantity)
                                              : String(+elem.product.price * +elem.quantity),
                                      )}
                                  </Box>
                              </Box>
                          ))
                        : null}
                    <Divider />
                    <Stack gap={'10px'}>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography>Subtotal</Typography>
                            </Box>
                            <Box>
                                <Typography>{localePrice(String(cardTotalPrice))}</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography>Shipping</Typography>
                            </Box>
                            <Box sx={{ fontSize: '12px' }}>
                                <Typography>Calculated at next step</Typography>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Box>
                                <Typography>Estimated taxes</Typography>
                            </Box>
                            <Box>
                                <Typography>$199.80</Typography>
                            </Box>
                        </Box>
                    </Stack>
                    <Divider />
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography>Total</Typography>
                        <Typography>{localePrice(String(cardTotalPrice + 199.8))}</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
});
