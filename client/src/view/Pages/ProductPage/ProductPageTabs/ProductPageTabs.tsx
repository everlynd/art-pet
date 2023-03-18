import { Divider, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useState } from 'react';
import { Product } from '../../../../data/store/productStore';
import { ProductPageDescription } from '../ProductPageDescription/ProductPageDescription';
import { ProductPageReview } from '../ProductPageReview/ProductPageReview';

interface ProductDescriptionProps {
    product: Product;
    productCharacteristic: { [key: string]: string }[];
}

export const ProductPageTabs = ({ product, productCharacteristic }: ProductDescriptionProps) => {
    const [currentTab, setTab] = useState(0);
    return (
        <Box>
            <Stack direction={'row'} gap={'20px'} sx={{ marginBottom: '20px' }}>
                <Box
                    sx={{
                        fontSize: '22px',
                        fontWeight: '400',
                        paddingRight: '20px',
                        borderInlineEnd: '1px solid var(--color-base-border)',
                        cursor: 'pointer',
                        transition: 'color var(--base-transition)',
                        '&:hover': { color: 'var(--color-accent-1)' },
                    }}
                    onClick={() => setTab(0)}
                    className={currentTab === 0 ? 'activeTab' : ''}
                >
                    Description
                </Box>
                <Box
                    className={currentTab === 1 ? 'activeTab' : ''}
                    sx={{
                        fontSize: '22px',
                        fontWeight: '400',
                        cursor: 'pointer',
                        transition: 'color var(--base-transition)',
                        '&:hover': { color: 'var(--color-accent-1)' },
                    }}
                    onClick={() => setTab(1)}
                >
                    Reviews
                </Box>
            </Stack>
            {currentTab === 0 ? (
                <ProductPageDescription product={product} productCharacteristic={productCharacteristic} />
            ) : (
                <ProductPageReview />
            )}
        </Box>
    );
};
