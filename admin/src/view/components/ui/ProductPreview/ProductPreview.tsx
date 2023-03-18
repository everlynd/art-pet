import { Divider, Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Product } from '../../Products/ProductCreateHelper.types';
import { localePrice, parseTags } from '../../Products/Products.helper';
import { ImgSlider } from '../ImgSlider/ImgSlider';

interface ProductPreviewProps<T> {
    product: T;
}

const titleStyle = {
    wordBreak: 'break-word',
    fontSize: '20px',
    fontWeight: '400',
    textTransform: 'capitalize',
};

const priceStyle = {
    fontWeight: '600',
    fontSize: '20px',
};

const descriptionStyle = {
    fontSize: '12px',
    color: '#949494',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: '4',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
};

export const ProductPreview = React.memo(({ product }: ProductPreviewProps<Product>) => {
    return (
        <Box
            sx={{
                border: '1px solid #eee',
                display: 'grid',
                gridTemplateColumns: '0.6fr 1fr',
                padding: '10px',
                borderRadius: '6px',
            }}
        >
            {product?.images.length ? <ImgSlider images={product.images} /> : null}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Box sx={{ ...titleStyle }}>{product.title}</Box>
                <Stack sx={{ ...priceStyle }} direction={'row'} gap={'10px'}>
                    {product.discount ? (
                        <Stack>
                            {product.discount_price
                                ? localePrice(product.discount_price)
                                : localePrice(String((+product.price * (100 - +product.discount)) / 100))}
                        </Stack>
                    ) : null}
                    <Stack sx={product.discount ? { color: 'gray', textDecoration: 'line-through' } : {}}>
                        {localePrice(product.price)}
                    </Stack>
                </Stack>
                <Box sx={{ ...descriptionStyle }}>{product.description}</Box>
                <Divider />
                {JSON.parse(product.characteristics as any).map((characteristic : any) => (
                    <Stack key={characteristic.name + Math.random()} direction={'row'} gap={'10px'} sx={{ fontSize: '14px' }}>
                        <Box sx={{ whiteSpace: 'nowrap' }}>{characteristic.name}</Box>
                        <Box sx={{ color: '#949494' }}>{`: ${characteristic.value}`}</Box>
                    </Stack>
                ))}
                <Stack direction={'row'} gap={'10px'} sx={{ fontSize: '14px' }} flexWrap={'wrap'}>
                    Tags:{' '}
                    {parseTags(product.tags).map((tag: any) => (
                        <Box sx={{ color: '#949494' }} key={tag.name + Math.random()}>
                            {tag.name},
                        </Box>
                    ))}
                </Stack>
            </Box>
        </Box>
    );
});
