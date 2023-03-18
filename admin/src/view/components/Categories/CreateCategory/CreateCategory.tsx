import { Checkbox, Divider, FormControl, MenuItem, Select, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, useForm } from 'react-hook-form';
import { FileInput } from '../../ui/FileInput/FileInput';
import { createCategory } from './Category.helper';
import { Category, RootCategory } from './Category.types';

export const CreateCategory = ({ rootCategories }: any) => {
    const {
        register,
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<Category>({
        defaultValues: {
            title: '',
            metaTitle: '',
            metaDescription: '',
            categoryBanner: [],
            rootCategory: '',
        },
    });
    const onSubmit = (data: any) => /*console.log(data);*/ createCategory(data);

    return (
        <Box sx={{ boxShadow: '0 5px 10px 0 rgb(66 66 66 / 30%)' }}>
            <Typography sx={{ textTransform: 'capitalize', padding: '10px 25px', fontWeight: '600' }} variant={'h6'}>
                Add New Category
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
                        <Typography>Root Category *</Typography>
                        <FormControl fullWidth size="small">
                            <Controller
                                render={({ field }) => (
                                    <Select {...field}>
                                        {rootCategories
                                            ? rootCategories.map((elem: any) => (
                                                  <MenuItem key={elem.id} value={elem.id}>
                                                      {elem.title}
                                                  </MenuItem>
                                              ))
                                            : null}
                                    </Select>
                                )}
                                name="rootCategory"
                                control={control}
                            />
                        </FormControl>
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
