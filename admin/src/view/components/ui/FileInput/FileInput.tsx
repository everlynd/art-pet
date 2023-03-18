import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Dropzone from 'react-dropzone';
import { Controller, FieldValues } from 'react-hook-form';

export const FileInput = ({ control, name }: FieldValues) => {
    return (
        <Controller
            name={name}
            control={control}
            defaultValue={[]}
            render={({ field: { onChange, onBlur, value } }) => (
                <>
                    <Dropzone onDrop={onChange}>
                        {({ getRootProps, getInputProps }) => (
                            <Paper
                                sx={{
                                    background: '#eee',
                                    textAlign: 'center',
                                    cursor: 'pointer',
                                    color: '#333',
                                    padding: '5px',
                                }}
                                variant="outlined"
                                {...getRootProps()}
                            >
                                <CloudUpload sx={{ marginTop: '5px', color: '#888', fontSize: '32px' }} />
                                <input {...getInputProps()} name={'sisa'} onBlur={onBlur} />
                                <p>Drag'n'drop images here</p>
                            </Paper>
                        )}
                    </Dropzone>
                    <List>
                        {value.map((f: File, index: number) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    <InsertDriveFile />
                                </ListItemIcon>
                                <ListItemText primary={f.name} secondary={f.size} />
                            </ListItem>
                        ))}
                    </List>
                </>
            )}
        />
    );
};
