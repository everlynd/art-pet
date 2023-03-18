import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import bg from '../../../assets/img/parallax.jpg';
import { Button } from '../../ui';
import { Input } from '../../ui/Input/Input';
export const SubscribeBlock = () => {
    return (
        <Box
            sx={{
                background: `url(${bg}) no-repeat fixed top`,
                backgroundSize: 'cover',
                display: 'flex',
                padding: '160px 0',
            }}
        >
            <Box sx={{ margin: '0 auto', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                <h2>Get Our Latets Update</h2>
                <p style={{ color: 'var(--color-base-body-text)' }}>
                    Subscribe to our latest newsletter to get news about special discounts.
                </p>
                <Stack direction={'row'} gap={'25px'}>
                    <Input>Your email address</Input>
                    <Button appearance="primary">Subscribe</Button>
                </Stack>
            </Box>
        </Box>
    );
};
