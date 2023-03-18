import { Box } from '@mui/system';
import { BASE_URL } from '../../../data/api/useAxios';
import { Button } from '../Button/Button';
import { localePrice, ProductCartProps, productCartStylesBlock, saleBlock } from '../ProductCart/ProductCart.helper';
import { Rating } from '../Rating/Rating';

export const ProductPromoCart = ({ product }: ProductCartProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                gap: '15px',
                alignItems: 'center',
                position: 'relative',
                border: '1px solid var(--color-base-border)',
                padding: '15px',
                borderRadius: '6px',
            }}
        >
            {product.discount ? (
                <Box data-content={`${product.discount} %`} className="sale" sx={{ ...saleBlock, top: '15px' }}></Box>
            ) : null}
            <Box
                sx={{
                    display: 'flex',
                    width: '250px',
                    height: '250px',
                    flexShrink: '0',
                    '& img': {
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                    },
                }}
            >
                <img src={BASE_URL + product.images[0]} alt="" />
                {product?.images?.[1] ? (
                    <Box className="hidden-img">
                        <img src={BASE_URL + product.images[1]} />
                    </Box>
                ) : null}
            </Box>
            <Box sx={{ width: '299px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
                <Box
                    sx={{
                        fontSize: '12px',
                        color: '#949494',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        WebkitLineClamp: '2',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                    }}
                >
                    {product.description}
                </Box>
                <Box>
                    <Button appearance="secondary">Select option</Button>
                </Box>
            </Box>
        </Box>
    );
};
