import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../../App';
import { BASE_URL } from '../../../data/api/useAxios';
import { Button } from '../../ui';
import { localePrice } from '../ProductPage/ProductPage.helper';
import { cartGrid } from './CartPage.helper';

export const CartPage = observer(() => {
    const { rootStore } = useContext(Context);
    const {
        cardStore: { cardItems, cardTotalPrice },
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
    useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    });
    return (
        <Box className="main-container" sx={{ gap: '20px', marginBottom: '40px' }}>
            <Box sx={{ ...cartGrid }}>
                <Box>Product</Box>
                <Box sx={{ marginLeft: 'auto' }}>Price</Box>
                <Box>Quantity</Box>
                <Box sx={{ marginLeft: 'auto' }}>Total</Box>
            </Box>
            <Divider />
            {parsedCartItems.length
                ? parsedCartItems.map((elem) => (
                      <Box key={Math.random()} sx={{ ...cartGrid }}>
                          <Box
                              sx={{
                                  display: 'flex',
                                  alignItems: 'center',
                                  '& img': { width: '100%', height: '100%', objectFit: 'contain' },
                              }}
                          >
                              <Box sx={{ width: '70px', height: '70px' }}>
                                  <Link to={`/product/${elem.product.id}`}>
                                      <img src={BASE_URL + elem.product.images[0]} />
                                  </Link>
                              </Box>
                              <Box>
                                  <Link to={`/product/${elem.product.id}`}>{elem.product.title}</Link>
                              </Box>
                          </Box>
                          <Box sx={{ marginLeft: 'auto' }}>
                              {localePrice(elem.product.discount ? String(elem.product.discount) : elem.product.price)}
                          </Box>
                          <Box>{elem.quantity}</Box>
                          <Box sx={{ marginLeft: 'auto' }}>
                              {localePrice(
                                  elem.product.discount
                                      ? String(elem.product.discount * elem.quantity)
                                      : String(+elem.product.price * elem.quantity),
                              )}
                          </Box>
                          <Divider sx={{ gridColumn: '1 / -1' }} />
                      </Box>
                  ))
                : null}
            <Box>
                <Button appearance="primary">Continue shopping</Button>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        '& textarea': {
                            outline: 'none',
                            border: '1px solid var(--color-base-border)',
                            borderRadius: 'var(--base-radius)',
                            padding: 'var(--base-padding)',
                            width: '100%',
                            boxSizing: 'border-box',
                        },
                        '& span': {
                            fontSize: '14px',
                            letterSpacing: '0.5px',
                        },
                    }}
                >
                    <span>Order special instructions</span>
                    <textarea></textarea>
                </Box>
                <Stack alignItems={'flex-end'} gap="20px">
                    <Box sx={{ fontWeight: '500' }}>Subtotal {localePrice(String(cardTotalPrice))}</Box>
                    <Box>Taxes and shipping calculated at checkout</Box>
                    <Box sx={{ width: '100%', '& button': { width: '100%' } }}>
                        <Button appearance="other" onClick={() => navigate('/payment')}>
                            Check out
                        </Button>
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
});
