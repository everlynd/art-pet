import { Divider, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box } from '@mui/system';
import { useContext, useEffect, useMemo, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Product } from '../../../data/store/productStore';
import { Button, Icon, Rating } from '../../ui';
import { ImgSlider } from '../../ui/ImgSlider/ImgSlider';
import {
    descriptionStyle,
    localePrice,
    priceStyle,
    titleStyle,
    infoBlockStyle,
    infoBlockGridStyle,
    quantityStyles,
    checkAndParseJSON,
} from './ProductPage.helper';
import { ProductPageTabs } from './ProductPageTabs/ProductPageTabs';
import { CardSlider } from '../../Components/CardSlider/CardSlider';
import { Context } from '../../../App';
import { ProductCart } from '../../ui/ProductCart/ProductCart';
import { observer } from 'mobx-react-lite';

export const ProductPage = observer(() => {
    const product = useLoaderData() as Product;
    const navigate = useNavigate();
    const { rootStore } = useContext(Context);
    const {
        cardStore: { addToCard, getCartItems, cardItems },
        userStore: { isLogin },
        productsStore: { products },
    } = rootStore;
    const [selectedQuantity, setQuantity] = useState(1);
    const changeQuantity = (sign: number) => {
        switch (sign) {
            case 1:
                +selectedQuantity >= +product.quantity ? null : setQuantity(selectedQuantity + 1);
                break;
            case -1:
                +selectedQuantity === 0 ? null : setQuantity(selectedQuantity - 1);
                break;
        }
    };
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [product]);
    const parsedProductCharacterstics = useMemo(() => {
        try {
            return JSON.parse(product.characteristics as string);
        } catch (e) {
            return [];
        }
    }, []);
    return (
        <Box className="main-container">
            <Stack direction={'row'} gap={'50px'}>
                <Box>
                    <ImgSlider images={product.images} />
                </Box>
                <Stack gap={'10px'}>
                    <Rating rating={product.rating} />
                    <Box sx={{ ...titleStyle }}>{product.title}</Box>
                    <Box sx={{ ...priceStyle }}>
                        {product.discount_price ? (
                            <Box sx={{ display: 'flex', gap: '10px' }}>
                                <span>{localePrice(product.discount_price)}</span>
                                <span style={{ textDecoration: 'line-through', color: '#666' }}>
                                    {localePrice(product.price)}
                                </span>
                            </Box>
                        ) : (
                            <Box>{localePrice(product.price)}</Box>
                        )}
                    </Box>
                    <Box sx={{ ...descriptionStyle }}>{product.description}</Box>
                    <Divider />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {parsedProductCharacterstics.length
                            ? parsedProductCharacterstics.slice(0, 2).map((elem: any) => (
                                  <Box key={Math.random()} sx={{ ...infoBlockGridStyle }}>
                                      <Box sx={{ ...infoBlockStyle }}>{elem.name}</Box>
                                      <Box sx={{ color: 'var(--color-base-body-text)' }}>: {elem.value}</Box>
                                  </Box>
                              ))
                            : null}
                        <Box sx={{ ...infoBlockGridStyle }}>
                            <Box sx={{ ...infoBlockStyle }}>SKU</Box>
                            <Box sx={{ color: 'var(--color-base-body-text)' }}>: {product.SKU}</Box>
                        </Box>
                        <Box sx={{ ...infoBlockGridStyle }}>
                            <Box sx={{ ...infoBlockStyle }}>Availability</Box>
                            <Box sx={{ color: 'var(--color-base-body-text)' }}>
                                : {product.quantity ? 'In Stock' : 'Out Stock'}
                            </Box>
                        </Box>
                        <Box sx={{ ...infoBlockGridStyle }}>
                            <Box sx={{ ...infoBlockStyle }}>Tags</Box>
                            <Box sx={{ color: 'var(--color-base-body-text)' }}>
                                : {checkAndParseJSON(product.tags as string).join(', ')}
                            </Box>
                        </Box>
                        <Box sx={{ ...infoBlockGridStyle }}>
                            <Box sx={{ ...infoBlockStyle }}>Quantity</Box>
                            <Box sx={{ color: 'var(--color-base-body-text)' }}>
                                <Box sx={{ ...quantityStyles }}>
                                    <Box
                                        sx={{ marginBottom: '-5px', cursor: 'pointer' }}
                                        onClick={() => changeQuantity(-1)}
                                    >
                                        <RemoveIcon />
                                    </Box>
                                    <Box>{selectedQuantity}</Box>
                                    <Box
                                        sx={{ marginBottom: '-5px', cursor: 'pointer' }}
                                        onClick={() => changeQuantity(1)}
                                    >
                                        <AddIcon />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Stack direction={'row'} gap={'20px'}>
                            <Button
                                style={{ width: '100%' }}
                                appearance="secondary"
                                onClick={() => {
                                    if (localStorage.getItem('token')) {
                                        addToCard(product, selectedQuantity);
                                    } else {
                                        navigate('/login', {
                                            state: { prevRoute: `/product/${product.id}` },
                                        });
                                    }
                                }}
                            >
                                Add to cart
                            </Button>
                            <Button style={{ width: '100%' }} appearance="primary" onClick={() => getCartItems()}>
                                Buy it Now
                            </Button>
                        </Stack>
                        <Stack
                            direction={'row'}
                            gap={'20px'}
                            sx={{
                                '& svg': {
                                    width: '15px',
                                    height: '15px',
                                },
                            }}
                        >
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Icon name="hrt" />
                                Add to Wishlist
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Icon name="lines" />
                                Add to Compare
                            </Box>
                        </Stack>
                    </Box>
                </Stack>
            </Stack>
            <ProductPageTabs product={product} productCharacteristic={parsedProductCharacterstics} />
            {products.length ? (
                <CardSlider countElements={5} bordered={false} title={'You Might Also Like'}>
                    {products.map((elem) => (
                        <ProductCart product={elem} key={Math.random()} />
                    ))}
                </CardSlider>
            ) : null}
        </Box>
    );
});
