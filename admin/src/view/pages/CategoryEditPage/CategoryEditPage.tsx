import { useLoaderData } from 'react-router-dom';
import { Divider, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { FileInput } from '../../components/ui/FileInput/FileInput';
import { Category } from '../../components/Categories/CreateCategory/Category.types';
import { updateCategory } from '../../components/Categories/CreateCategory/Category.helper';

interface LoaderProps {
	id: number;
	category: Category
}

export const CategoryEditPage = () => {
	const {category, id} = useLoaderData() as LoaderProps;

    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Category>({
        defaultValues: {
            title: category.title,
            metaTitle: category.metaTitle,
            metaDescription: category.metaDescription,
            categoryBanner: [],
        },
    });
    const onSubmit = (data: any) => {
		let payload = {id: id, ...data}
		updateCategory(payload)
	}

    return (
        <Box sx={{ boxShadow: '0 5px 10px 0 rgb(66 66 66 / 30%)' }}>
            <Typography sx={{ textTransform: 'capitalize', padding: '10px 25px', fontWeight: '600' }} variant={'h6'}>
                Edit {category.title}
            </Typography>
            <Divider />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <Stack>
                        <Typography>Title *</Typography>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            {...register('title', { required: true })}
                            error={!!errors?.title}
                            helperText={!!errors?.title ? `Field title is requaired` : ''}
                        />
                    </Stack>
                    <Stack>
                        <Typography>Thumbnail (72*72)</Typography>
                        <FileInput control={control} name={'categoryBanner'} />
                    </Stack>
                    <Stack>
                        <Typography>Meta title</Typography>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            {...register('metaTitle')}
                        />
                    </Stack>
                    <Stack>
                        <Typography>Meta description</Typography>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            variant="outlined"
                            size="small"
                            {...register('metaDescription')}
                        />
                    </Stack>
                    <input type="submit" value={'Save'} />
                </Box>
            </form>
        </Box>
    );
};
