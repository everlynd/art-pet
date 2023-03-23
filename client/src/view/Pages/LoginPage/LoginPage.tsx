import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { Input } from '../../ui/Input/Input';
import { login, loginStyles } from './LoginPage.helper';

export const LoginPage = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => login(data);
    return (
        <Stack gap={'20px'} sx={{ ...loginStyles }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="text" {...register('email')} placeholder=" " />
                    <span>Email</span>
                </label>
                <label>
                    <input type="text" {...register('password')} placeholder=" " />
                    <span>Password</span>
                </label>
            </form>
            <Box component={'span'}>Forgot your password?</Box>
            <Stack direction={'row'} gap={'20px'} sx={{ margin: '0 auto' }}>
                <Button appearance="primary" onClick={() => handleSubmit(onSubmit)()}>Login</Button>
                <Button
                    appearance="primary"
                    onClick={() => {
                        navigate('/register');
                    }}
                >
                    Sign up
                </Button>
            </Stack>
        </Stack>
    );
};
