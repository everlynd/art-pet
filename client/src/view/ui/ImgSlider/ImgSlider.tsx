import { Box, Stack } from '@mui/material';
import { useCallback, useState } from 'react';
import { BASE_URL } from '../../../data/api/useAxios';

interface ImgSliderProps {
    images: string[];
}

export const ImgSlider = ({ images }: ImgSliderProps) => {
    const [count, setCount] = useState(0);
    const changeSlide = useCallback(
        (direction: number) => {
            if (direction === 1) {
                if (count + 1 === images.length) {
                    setCount(0);
                } else {
                    setCount((prev) => prev + 1);
                }
            }
            if (direction === -1) {
                if (count === 0) {
                    setCount(images.length);
                }
                setCount((prev) => prev - 1);
            }
        },
        [count, setCount],
    );
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px',
                '& img': {
                    border: '1px solid var(--color-base-border)',
                    borderRadius: '3px',
                    position: 'absolute',
                    width: '540px',
                    height: '540px',
                    opacity: '0',
                    transition: 'opacity .3s',
                    display: 'flex',
                    objectFit: 'contain',
                },
                '& .showed': { opacity: '1' },
            }}
        >
            <Box sx={{ position: 'relative', height: '540px', width: '540px' }}>
                {images.map((img, idx) => (
                    <img key={img} className={count === idx ? 'showed' : ''} src={BASE_URL + img} alt="kartinka" />
                ))}
            </Box>
            <Stack
                direction={'row'}
                gap={'5px'}
                sx={{
                    '& button': {
                        outline: 'none',
                        border: 'none',
                        background: 'var(--color-base-accent-1)',
                        color: 'black',
                        borderRadius: '50%',
                        cursor: 'pointer',
                        width: '25px',
                        height: '25px',
                        transition: 'background var(--base-transition), color var(--base-transition)',
                        '&:hover': {
                            background: 'var(--color-base-button-background)',
                            color: 'white',
                        },
                    },
                }}
            >
                <button onClick={() => changeSlide(1)}>&lt;</button>
                <div>{`${count + 1} / ${images.length}`}</div>
                <button onClick={() => changeSlide(-1)}>&gt;</button>
            </Stack>
        </Box>
    );
};
