import { Box, Stack } from '@mui/system';
import { useState } from 'react';
import { Button, Rating } from '../../../ui';
import { Input } from '../../../ui/Input/Input';

export const ProductPageReview = () => {
    const [editable, setEditable] = useState(false);
    return (
        <Box sx={{ border: '1px solid var(--color-base-border)', padding: '40px' }}>
            <Stack direction={'row'} alignItems={'flex-end'} justifyContent={'space-between'}>
                <Stack>
                    <h2>Customer Reviews</h2>
                    <span>No reviews yet</span>
                </Stack>
                <Button
                    appearance="primary"
                    onClick={() => {
                        setEditable((prev) => !prev);
                    }}
                >
                    Write a review
                </Button>
            </Stack>
            {editable ? (
                <Stack
                    sx={{
                        '& form': {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                            '& span': {
                                fontSize: '13px',
                                lineHeight: '20px',
                            },
                            '& button': {
                                marginLeft: 'auto',
                            },
                        },
                    }}
                >
                    <form>
                        <h4>Write A Review</h4>
                        <label>
                            <span>Name</span>
                            <Input>Enter your name</Input>
                        </label>
                        <label>
                            <span>Email</span>
                            <Input>john.smith@example.com</Input>
                        </label>
                        <label>
                            <span>Rating</span>
                            <Rating rating={0} />
                        </label>
                        <label>
                            <span>Review Title</span>
                            <Input>Give your review a title</Input>
                        </label>
                        <label style={{ display: 'flex', flexDirection: 'column' }}>
                            <span>Body of Review (1500)</span>
                            <textarea
                                style={{
                                    outline: 'none',
                                    border: '1px solid var(--color-base-border)',
                                    borderRadius: 'var(--base-radius)',
                                    padding: 'var(--base-padding)',
                                    width: '100%',
                                }}
                                placeholder="Write your comment here"
                            ></textarea>
                        </label>
                        <Button appearance="primary">Submit Review</Button>
                    </form>
                </Stack>
            ) : null}
        </Box>
    );
};
