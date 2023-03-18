import { FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { useEffect } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { CharacteristicsInput } from '../ui/CharacteristicsInput/CharacteristicsInput';
import { FileInput } from '../ui/FileInput/FileInput';
import { ProductPreview } from '../ui/ProductPreview/ProductPreview';
import { TagInput } from '../ui/TagInput/TagInput';
import { Product } from './ProductCreateHelper.types';
import { createProduct, parseTags, ProductLoaderInterface, recursiveAppend, updateProduct } from './Products.helper';

type FieldName = [keyof Omit<Product, 'images' | 'characteristics'>];

export const ProductCreate = () => {
    const { categories, product, productID } = useLoaderData() as ProductLoaderInterface;
    const {
        register,
        control,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Product>({
        defaultValues: {
            title: product?.title || '',
            price: product?.price || '',
            SKU: product?.SKU || '',
            description: product?.description || '',
            quantity: product?.quantity || null,
            tags: parseTags(product?.tags) || [],
            characteristics: product?.characteristics?.length ? [...JSON.parse(product.characteristics as any)] : [],
            images: product?.images || [],
            categoryId: product?.categoryId || '',
            discount: product?.discount || null
        },
    });
    const {
        fields: characteristicField,
        append: characteristicAppend,
        remove: characteristicRemove,
    } = useFieldArray<any>({
        control,
        name: 'characteristics',
    });

    const {
        fields: tagsField,
        append: tagsAppend,
        remove: tagsRemove,
    } = useFieldArray<any>({
        control,
        name: 'tags',
    });
    const onSubmit = async (data: any) => {
        let updatedProduct;
        if (productID) {
            updatedProduct = { ...product, ...data };
        }
        const payload = { ...data, tags: data.tags.map((elem: { name: string }) => elem.name) };
        const formData = new FormData();
        recursiveAppend(formData, productID ? updatedProduct : payload);
        productID ? updateProduct(formData) : createProduct(formData);
    };

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'flex-start' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        '& label.Mui-focused': {
                            color: '#081229',
                        },
                        '& .MuiInput-underline:after': {
                            borderBottomColor: '#081229',
                        },
                    }}
                >
                    {(['title', 'SKU', 'description', 'price', 'quantity', 'discount'] as unknown as FieldName).map(
                        (elem) => (
                            <TextField
                                key={Math.random() + Math.random()}
                                sx={{ marginBottom: '10px', width: '100%' }}
                                {...register(elem, { required: elem === 'discount' ? false : true })}
                                id="outlined-basic"
                                label={`Product ${elem}`}
                                variant="outlined"
                                error={!!errors?.[elem]}
                                helperText={!!errors?.[elem] ? `Field ${elem} is requaired` : ''}
                            />
                        ),
                    )}
                </Box>
                <Stack>
                    <FormControl fullWidth>
                        <Controller
                            render={({ field }) => (
                                <>
                                    <InputLabel id="demo-simple-select-helper-label">Product Category</InputLabel>
                                    <Select {...field} id="demo-simple-select-helper" label="Product Category">
                                        {categories
                                            ? categories.map((elem: any) => (
                                                  <MenuItem key={elem.id + Math.random()} value={elem.id}>
                                                      {elem.title}
                                                  </MenuItem>
                                              ))
                                            : null}
                                    </Select>
                                </>
                            )}
                            name="categoryId"
                            control={control}
                        />
                    </FormControl>
                </Stack>
                <CharacteristicsInput
                    control={control}
                    name={'characteristics'}
                    fields={characteristicField}
                    append={characteristicAppend}
                    remove={characteristicRemove}
                    register={register}
                />
                <TagInput
                    control={control}
                    name={'tags'}
                    fields={tagsField}
                    append={tagsAppend}
                    remove={tagsRemove}
                    register={register}
                />
                <FileInput control={control} name={'images'} />
                <input type="submit" value={'Send product'} />
            </form>
            {/* <ProductPreview product={product} />  */}
        </Box>
    );
};
