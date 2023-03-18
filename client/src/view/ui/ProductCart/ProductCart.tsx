import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../data/api/useAxios';
import { Button } from '../Button/Button';
import { Icon } from '../Icons/Icons';
import { Rating } from '../Rating/Rating';
import { iconsStyles, localePrice, ProductCartProps, productCartStylesBlock, saleBlock } from './ProductCart.helper';

export const ProductCart = ({ product }: ProductCartProps) => {
    return (
        <Link to={`product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Box sx={{ ...productCartStylesBlock }}>
                {product.discount ? (
                    <Box data-content={`${product.discount} %`} className="sale" sx={{ ...saleBlock }}></Box>
                ) : null}
                <Stack
                    className="icon-block"
                    gap={'10px'}
                    sx={{
                        position: 'absolute',
                        right: '15px',
                        opacity: '0',
                        zIndex: '2',
                        transition: 'opacity var(--base-transition)',
                        '& svg': {
                            width: '15px',
                            height: '15px',
                            padding: '5px',
                        },
                    }}
                >
                    <Stack sx={{ ...iconsStyles }}>
                        <Icon name="hrt" />
                    </Stack>
                    <Stack sx={{ ...iconsStyles }}>
                        <Icon name="lines" />
                    </Stack>
                    <Stack sx={{ ...iconsStyles }}>
                        <Icon name="eye" />
                    </Stack>
                </Stack>
                <Box sx={{ display: 'flex' }}>
                    <img src={BASE_URL + product.images[0]} alt="" />
                    {product?.images?.[1] ? (
                        <Box className="hidden-img">
                            <img src={BASE_URL + product.images[1]} />
                        </Box>
                    ) : null}
                </Box>
                <Box>{product.title}</Box>
                <Box>
                    <Rating rating={product.rating} />
                </Box>
                <Box sx={{ fontSize: '16px', fontWeight: '600' }}>
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
                <Button appearance="secondary">Select option</Button>
            </Box>
        </Link>
    );
};
