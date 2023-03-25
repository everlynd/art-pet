import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../../App';
import { Button } from '../../ui';
import { loginStyles } from './LoginPage.helper';

interface IFormInput {
    email: string;
    password: string;
}

export const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInput>();
    const { rootStore } = useContext(Context);
    const {
        userStore: { userLogin, shouldNavigate, unSetShouldNavigate },
        cardStore: { getCartItems },
    } = rootStore;

    useEffect(() => {
        if (shouldNavigate) {
            if (location?.state?.prevRoute) {
                unSetShouldNavigate();
                navigate(location?.state?.prevRoute, { replace: true });
            } else {
                navigate('/');
            }
            getCartItems();
        }
    }, [shouldNavigate]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    return (
        <Stack gap={'20px'} sx={{ ...loginStyles }}>
            <h3>Login</h3>
            <form onSubmit={handleSubmit(userLogin)}>
                <label>
                    <input
                        type="text"
                        {...register('email', {
                            required: 'Field must be email',
                        })}
                        placeholder=" "
                    />
                    {errors?.email && (
                        <Box sx={{ fontSize: '10px', color: '#ef7676', position: 'absolute' }}>
                            {errors?.email?.message || 'errrr'}
                        </Box>
                    )}
                    <span>Email</span>
                </label>
                <label>
                    <input
                        type="text"
                        {...register('password', {
                            required: 'Length must be between 5 and 16',
                            minLength: { value: 5, message: 'Length must be between 5 and 16' },
                            maxLength: { value: 16, message: 'Length must be between 5 and 16' },
                        })}
                        placeholder=" "
                    />
                    {errors?.password && (
                        <Box sx={{ fontSize: '10px', color: '#ef7676', position: 'absolute' }}>
                            {errors?.password?.message}
                        </Box>
                    )}
                    <span>Password</span>
                </label>
            </form>
            <Box component={'span'}>Forgot your password?</Box>
            <Stack direction={'row'} gap={'20px'} sx={{ margin: '0 auto' }}>
                <Button appearance="primary" onClick={() => handleSubmit(userLogin)()}>
                    Login
                </Button>
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
