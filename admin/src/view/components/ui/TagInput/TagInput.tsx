import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, FieldValues } from 'react-hook-form';
import { FormId } from '../CharacteristicsInput/CharacteristicsInput';

export const TagInput = ({ control, name, append, remove, fields, register }: FieldValues) => {
    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={() => (
                <Box>
                    {fields.map(({ id }: FormId, index: number) => {
                        return (
                            <Box
                                key={Math.random() + id}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: '1fr 1fr',
                                    gap: '30px',
                                    margin: '20px 0 0 0',

                                    '& label.Mui-focused': {
                                        color: '#081229',
                                    },
                                    '& .MuiInput-underline:after': {
                                        borderBottomColor: '#081229',
                                    },
                                }}
                            >
                                <TextField
                                    sx={{ marginBottom: '10px' }}
                                    {...register(`tags[${index}.name]`)}
                                    id="standard-basic"
                                    label="Tag name"
                                    variant="standard"
                                />
                                <Button sx={{ color: '#bf1650' }} onClick={() => remove(index)}>
                                    Remove Tag
                                </Button>
                            </Box>
                        );
                    })}
                    <Button sx={{ color: '#081229', margin: '20px 0' }} onClick={() => append()}>
                        Add tags
                    </Button>
                </Box>
            )}
        />
    );
};
