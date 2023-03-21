import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Context } from '../../../App';
import bg from '../../../assets/img/bredcumb.jpg';
import { backgroundStyles, linkStyles } from './BreadCrumbs.helper';

interface ParamsProps<T> {
    id: T;
}

export const BreadCrumbs = observer(({ location }: any) => {
    const params = useParams() as Readonly<ParamsProps<string>>;
    const { rootStore } = useContext(Context);
    const {
        productsStore: { products },
        categoriesStore: { categories },
    } = rootStore;
    const currentProduct = useMemo(() => {
        return products.find((elem) => +elem.id === +params.id)?.title;
    }, [products, params]);
    const currentCategories = useMemo(() => {
        const category = categories.find((elem) => elem.url === params.id);
        let parentCategory;
        if (category?.parentId) {
            parentCategory = categories.find((elem) => elem.id === category.parentId);
            return [
                { title: 'Home', url: '' },
                { title: 'Design', url: 'design' },
                { title: parentCategory?.title, url: parentCategory?.url },
                { title: category.title, url: category.url },
            ];
        }
        return [
            { title: 'Home', url: '' },
            { title: 'Design', url: 'design' },
            { title: category?.title, url: category?.url },
        ];
    }, [params, categories]);
    return (
        <Box sx={{ ...backgroundStyles, background: `url(${bg}) no-repeat fixed top` }}>
            <Box sx={{ '& h3': { margin: '0 0 5px 0' } }}>
                {location.pathname.includes('product/') ? (
                    <Stack direction={'row'} sx={{ ...linkStyles }}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/'}>{currentProduct}</Link>
                    </Stack>
                ) : (
                    <Stack alignItems={'center'}>
                        <h3>{currentCategories.at(-1)?.title}</h3>
                        <Stack direction={'row'} sx={{ ...linkStyles }}>
                            {currentCategories.map((elem) => (
                                <Link key={Math.random()} to={elem.url ? `catalog/${elem.url}` : '/'}>
                                    {elem.title}
                                </Link>
                            ))}
                        </Stack>
                    </Stack>
                )}
            </Box>
        </Box>
    );
});
