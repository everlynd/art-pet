import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import { Controller, FieldValues } from 'react-hook-form';

export type FormId = { id: string };

export const CharacteristicsInput = ({ control, name, append, remove, fields, register }: FieldValues) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={() => (
                <>
                    <Box>
                        {fields.map(({ id }: FormId, index: number) => {
                            return (
                                <Box
                                    key={id}
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
                                        {...register(`characteristics[${index}.name]`)}
                                        id="standard-basic"
                                        label="Characteristic name"
                                        variant="standard"
                                    />
                                    <TextField
                                        sx={{ marginBottom: '10px' }}
                                        {...register(`characteristics[${index}.value]`)}
                                        id="standard-basic"
                                        label="Characteristic value"
                                        variant="standard"
                                    />
                                    <Button
                                        sx={{ color: '#bf1650', gridColumn: '1 / -1', justifyContent: 'end' }}
                                        onClick={() => remove(index)}
                                    >
                                        Remove Characteristic
                                    </Button>
                                </Box>
                            );
                        })}
                        <Button sx={{ color: '#081229', margin: '20px 0' }} onClick={() => append()}>
                            Add characteristics
                        </Button>
                    </Box>
                </>
            )}
        />
    );
};
