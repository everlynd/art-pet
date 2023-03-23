import { Stack } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../ui';
import { Input } from '../../ui/Input/Input';
import { loginStyles } from '../LoginPage/LoginPage.helper';
import { createUser } from './RegistrationPage.helper';

export const RegisterPage = () => {
    // const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => createUser(data);
    return (
        <Stack gap={'20px'} sx={{ ...loginStyles }}>
            <h3>Create Account</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    <input type="text" {...register('firstName')} placeholder=" " />
                    <span>First Name</span>
                </label>
                <label>
                    <input type="text" {...register('lastName')} placeholder=" " />
                    <span>Last Name</span>
                </label>
                <label>
                    <input type="text" {...register('email')} placeholder=" " />
                    <span>Email</span>
                </label>
                <label>
                    <input type="text" {...register('password')} placeholder=" " />
                    <span>Password</span>
                </label>
                <Button appearance="primary" type="submit">
                    Create
                </Button>
            </form>
        </Stack>
    );
};
