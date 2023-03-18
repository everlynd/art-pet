import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Product } from '../../../../data/store/productStore';

interface ProductDescriptionProps {
    product: Product;
    productCharacteristic: { [key: string]: string }[];
}

export const ProductPageDescription = ({ product, productCharacteristic }: ProductDescriptionProps) => {
    return (
        <Box
            sx={{
                border: '1px solid var(--color-base-border)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Box sx={{ fontSize: '14px', color: 'var(--color-base-text)' }}>{product.description}</Box>
            <Stack gap={'10px'} sx={{ fontSize: '14px', marginLeft: '20px' }}>
                {productCharacteristic.map((elem) => (
                    <Stack key={Math.random()} direction={'row'} gap={'5px'}>
                        <Stack
                            alignItems={'center'}
                            gap={'5px'}
                            direction={'row'}
                            sx={{
                                '&::before': {
                                    content: '"•"',
                                },
                            }}
                        >
                            {elem.name}:
                        </Stack>
                        <Box>{elem.value}</Box>
                    </Stack>
                ))}
            </Stack>
        </Box>
    );
};
