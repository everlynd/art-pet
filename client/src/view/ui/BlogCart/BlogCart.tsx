import { Divider } from '@mui/material';
import { Box } from '@mui/system';
import { BlogCartProps } from './BlogCart.helper';

interface BlogCart {
    blog: BlogCartProps;
}

export const BlogCart = ({ blog }: BlogCart) => {
    return (
        <Box sx={{ display: 'flex', gap: '20px', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Box
                sx={{
                    width: '364px',
                    height: '266px',
                    display: 'flex',
                    '& img': { width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' },
                }}
            >
                <img src={blog.image} alt="" />
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    gap: '10px',
                    fontSize: '14px',
                    letterSpacing: '.1rem',
                    color: 'var(--color-base-body-text)',
                }}
            >
                <Box>{blog.date}</Box>
                <Divider orientation="vertical" />
                <Box>{blog.comments} comments</Box>
            </Box>
            <Box
                sx={{
                    color: 'var(--color-base-text)',
                    fontSize: '16px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    ' -webkit-line-clamp': '2',
                    WebkitBoxOrient: 'vertical',
                    fontWeight: '500',
                }}
            >
                {blog.title}
            </Box>
        </Box>
    );
};
