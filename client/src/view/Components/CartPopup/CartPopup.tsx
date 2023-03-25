import { Box } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import React, { useContext, useMemo } from 'react';
import { Context } from '../../../App';
import { observer } from 'mobx-react-lite';
import { Divider, Stack } from '@mui/material';
import { BASE_URL } from '../../../data/api/useAxios';
import { localePrice } from '../../ui/ProductCart/ProductCart.helper';
import {
    overcoverStyles,
    cartPopupStyles,
    cartPopupFooter,
    ProductCharacteristics,
    emptyCart,
} from './CartPopup.helper';
import { Button, Icon } from '../../ui';
import { Link, useNavigate } from 'react-router-dom';

export const CartPopup = observer(() => {
    const { rootStore } = useContext(Context);
    const {
        cardStore: { cardPopupIsOpen, setCartPopup, cardItems, removeFromCard, cardItemLength, cardTotalPrice },
    } = rootStore;
    const navigate = useNavigate();
    const parsedCartItems = useMemo(() => {
        return cardItems && cardItems.length
            ? cardItems.map((elem) => {
                  try {
                      elem.product.characteristics = JSON.parse(elem.product.characteristics as string);
                      return elem;
                  } catch {
                      return elem;
                  }
              })
            : [];
    }, [cardItems]);

    return (
        <>
            {cardPopupIsOpen ? <Box sx={{ ...overcoverStyles }} onClick={() => setCartPopup()}></Box> : null}
            <Box sx={{ ...cartPopupStyles }} className={cardPopupIsOpen ? 'popup-open' : ''}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
                    <Box component={'h4'}>Your Shopping Cart</Box>
                    <CloseIcon sx={{ cursor: 'pointer' }} onClick={() => setCartPopup()} />
                </Box>
                <Divider />
                {cardItems && cardItems.length ? (
                    <Box sx={{ height: 'calc(100% - 157px)', overflow: 'scroll' }}>
                        {parsedCartItems.map((elem) => (
                            <Box
                                key={Math.random()}
                                sx={{ display: 'flex', alignItems: 'flex-start', gap: '10px', padding: '20px' }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '70px',
                                        height: '70px',
                                        '& img': {
                                            display: 'flex',
                                            objectFit: 'contain',
                                            width: '100%',
                                            height: '100%',
                                        },
                                    }}
                                >
                                    <Link to={`/product/${elem.product.id}`}>
                                        <img src={BASE_URL + elem.product.images[0]} />
                                    </Link>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'flex-start',
                                        gap: '5px',
                                    }}
                                >
                                    <Box>
                                        <Link to={`/product/${elem.product.id}`}>{elem.product.title}</Link>
                                    </Box>
                                    <Box sx={{ fontWeight: '500' }}>
                                        {elem.quantity} X{' '}
                                        {localePrice(
                                            elem.product.discount ? String(elem.product.discount) : elem.product.price,
                                        )}
                                    </Box>
                                    <Stack sx={{ fontSize: '12px', gap: '5px' }}>
                                        {(elem.product.characteristics.slice(0, 2) as ProductCharacteristics[]).map(
                                            (elem) => (
                                                <Box key={Math.random()}>
                                                    <span>{elem.name}</span>:<span>{elem.value}</span>
                                                </Box>
                                            ),
                                        )}
                                    </Stack>
                                </Box>
                                <Box sx={{ marginLeft: 'auto', cursor: 'pointer' }}>
                                    <DeleteForeverOutlinedIcon onClick={() => removeFromCard(elem.product.id)} />
                                </Box>
                            </Box>
                        ))}
                    </Box>
                ) : (
                    <Box sx={{ ...emptyCart }}>
                        <Icon name="empty-cart" />
                        <h4>Your cart is currently empty.</h4>
                        <Button
                            appearance="primary"
                            onClick={() => {
                                navigate('/catalog/design');
                                setCartPopup();
                            }}
                        >
                            Continue Shopping
                        </Button>
                    </Box>
                )}
                {parsedCartItems.length ? (
                    <Box sx={{ ...cartPopupFooter }}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                gap: '235px',
                                fontSize: '14px',
                                fontWeight: '500',
                            }}
                        >
                            <Box>
                                <Box>Total items</Box>
                                <Box>{cardItemLength}</Box>
                            </Box>
                            <Box>
                                <Box>Subtotal</Box>
                                <Box>{localePrice(String(cardTotalPrice))}</Box>
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '27%' }}>
                            <Button
                                appearance="primary"
                                onClick={() => {
                                    navigate('/cart');
                                    setCartPopup();
                                }}
                            >
                                View cart
                            </Button>
                            <Button appearance="other">Check out</Button>
                        </Box>
                    </Box>
                ) : null}
            </Box>
        </>
    );
});
