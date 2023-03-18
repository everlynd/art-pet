import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../data/api/useAxios';
import { Category } from '../../../data/store/categoriesStore';

interface CategoryCardProps<T> {
    category: T;
}

export const CategoryCard = ({ category }: CategoryCardProps<Category>) => {
    return (
        <Box
            sx={{
                '& a': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    textDecoration: 'none',
                    color: 'inherit',
                    '&:hover': {
                        '& > .category-card__items-count': {
                            '&::after': {
                                content: '"View more"',
                                color: 'var(--color-base-button-background)',
                                textDecoration: 'underline',
                            },
                        },
                    },
                },
                '& img': { display: 'flex', width: '100%', height: '100%', objectFit: 'contain', borderRadius: '6px' },
            }}
        >
            <Link to={`catalog/${category.url}`}>
                <Box sx={{ width: '204px', height: '204px' }}>
                    <img src={BASE_URL  + category.icon} />
                </Box>
                <Box>{category.title}</Box>
                <Box
                    className="category-card__items-count"
                    data-content={`(${category.itemsCount} items)`}
                    sx={{ '&::after': { content: 'attr(data-content)' } }}
                ></Box>
            </Link>
        </Box>
    );
};
