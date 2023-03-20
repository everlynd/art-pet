import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { customCheckboxStyles, customInputStyles } from './Filter.helper';

export const Filter = () => {
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = (data: any) => console.log(data);
    return (
        <Box>
            <Box component={'h4'} sx={{ backgroundColor: 'var(--color-accent-2)', margin: '0', padding: '10px 15px' }}>
                Filter By
            </Box>
            <form>
                <Box sx={{ padding: '5px 20px 10px' }}>
                    <Box sx={{ marginBottom: '10px' }}>Availability</Box>
                    <Box sx={{ ...customCheckboxStyles }}>
                        <label>
                            <input
                                type="checkbox"
                                {...register('inStock', {
                                    onChange: () => {
                                        handleSubmit(onSubmit)();
                                    },
                                })}
                            />
                            <span></span>
                            In stock(quantity)
                        </label>
                        <label>
                            <input type="checkbox" {...register('outOfStock')} />
                            <span></span>
                            Out of stock(quantity)
                        </label>
                    </Box>
                </Box>
                <Box sx={{ ...customInputStyles }}>
                    <Box sx={{ marginBottom: '10px' }}>Availability</Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '10px', alignItems: 'center' }}>
                        <label>
                            $ <input type="text" {...register('from')} placeholder=" " />
                            <span>From</span>
                        </label>
                        <label>
                            $ <input type="text" {...register('to')} placeholder=" " />
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
