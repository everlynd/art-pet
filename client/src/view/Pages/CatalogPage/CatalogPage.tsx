import { Box } from '@mui/system';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { useLoaderData, useLocation } from 'react-router-dom';
import { Context } from '../../../App';
import { Filter } from '../../Components/Filter/Filter';
import { ProductCart } from '../../ui/ProductCart/ProductCart';

export const CatalogPage = observer(() => {
    // const { products, filters } = useLoaderData() as any;
    const { rootStore } = useContext(Context);
    const {
        catalogStore: { getCurrentProducts, products },
    } = rootStore;
    const location = useLocation();
    const currentCategorySlug = location.pathname.split('/')[location.pathname.split('/').length - 1];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, []);
    useEffect(() => {
        getCurrentProducts(currentCategorySlug);
    }, [location])
    return (
        <Box
            className="main-container"
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', marginBottom: '40px' }}
        >
            <Filter />
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '15px' }}>
                {products && products.length ? (
                    products.map((elem: any) => <ProductCart product={elem} key={Math.random()} />)
                ) : (
                    <Box>
                        <Box component={'h3'} sx={{ marginTop: 0 }}>
                            Whoops! Nothing here{' '}
                        </Box>
                        <Box component={'p'} sx={{ whiteSpace: 'nowrap' }}>
                            Try to clear filters or simplify your query or search in another category
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
});
