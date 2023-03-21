import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData, useLocation } from 'react-router-dom';
import { Context } from '../../../App';
import { catalogChanger } from '../../Pages/CatalogPage/CatalogPage.helper';
import { customCheckboxStyles, customInputStyles } from './Filter.helper';

export const Filter = () => {
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const { rootStore } = useContext(Context);
    const {
        catalogStore: { getCurrentProducts, inStock, outOfStock },
    } = rootStore;
    const location = useLocation();
    const currentCategorySlug = location.pathname.split('/')[location.pathname.split('/').length - 1];
    const onSubmit = (data: any) => getCurrentProducts(currentCategorySlug, data);
    return (
        <Box sx={{ border: '1px solid var(--color-base-border)', borderRadius: '5px', maxWidth: '247px' }}>
            <Box component={'h4'} sx={{ backgroundColor: 'var(--color-accent-2)', margin: '0', padding: '10px 15px' }}>
                Filter By
            </Box>
            <form>
                <Box sx={{ padding: '5px 20px 10px' }}>
                    <Box sx={{ marginBottom: '10px' }}>Availability</Box>
                    <Box sx={{ ...customCheckboxStyles }}>
                        <label className={!inStock ? 'custom-disable' : ''}>
                            <input
                                type="checkbox"
                                {...register('inStock', {
                                    onChange: () => {
                                        handleSubmit(onSubmit)();
                                    },
                                })}
                            />
                            <span></span>
                            In stock{`(${inStock})`}
                        </label>
                        <label className={!outOfStock ? 'custom-disable' : ''}>
                            <input type="checkbox" {...register('outOfStock')} />
                            <span></span>
                            Out of stock{`(${outOfStock})`}
                        </label>
                    </Box>
                </Box>
                <Box sx={{ ...customInputStyles }}>
                    <Box sx={{ marginBottom: '10px' }}>Availability</Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                        <label>
                            ${' '}
                            <input
                                type="text"
                                {...register('from')}
                                placeholder=" "
                                onBlur={() => handleSubmit(onSubmit)()}
                            />
                            <span>From</span>
                        </label>
                        <label>
                            ${' '}
                            <input
                                type="text"
                                {...register('to')}
                                placeholder=" "
                                onBlur={() => handleSubmit(onSubmit)()}
                            />
                            <span>To</span>
                        </label>
                    </Box>
                </Box>
                <Box sx={{ padding: '5px 20px 10px' }}>
                    <Tooltip placement="top" title="Disabled on server">
                        <Box sx={{ marginBottom: '10px', cursor: 'pointer' }}>Product type</Box>
                    </Tooltip>
                    <Box sx={{ ...customCheckboxStyles, opacity: '.3', userSelect: 'none', pointerEvents: 'none' }}>
                        {[
                            'Fashion crafts',
                            'Paper crafts',
                            'Pottery and Glass Crafts',
                            'Textile Crafts',
                            'Wood Crafts',
                        ].map((elem) => (
                            <label key={Math.random()}>
                                <input type="checkbox" />
                                <span></span>
                                {elem}(quantity)
                            </label>
                        ))}
                    </Box>
                </Box>
                <Box sx={{ padding: '5px 20px 10px' }}>
                    <Tooltip placement="top" title="Disabled on server">
                        <Box sx={{ marginBottom: '10px', cursor: 'pointer' }}>Brands</Box>
                    </Tooltip>
                    <Box sx={{ ...customCheckboxStyles, opacity: '.3', userSelect: 'none', pointerEvents: 'none' }}>
                        {['Anasha Art Gallery', 'Apkamart', 'Kauthuk', 'Mojaro'].map((elem) => (
                            <label key={Math.random()}>
                                <input type="checkbox" />
                                <span></span>
                                {elem}(quantity)
                            </label>
                        ))}
                    </Box>
                </Box>
            </form>
        </Box>
    );
};
