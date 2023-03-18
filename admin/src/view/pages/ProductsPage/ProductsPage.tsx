import { Box } from '@mui/system';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../../../data/API';
import { Product } from '../../components/Products/ProductCreateHelper.types';
import { localePrice } from '../../components/Products/Products.helper';
import { Paginator } from '../../components/ui/Paginator/Paginator';
import { fetchUsers } from '../../components/Users/usersHelper';
import { fetchProducts } from './ProductsPage.helper';

const gridTemplate = {
    display: 'grid',
    gridTemplateColumns: '0.1fr 0.5fr 1fr 0.5fr',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
};


export const ProductsPage = () => {
    const [products, setProducts] = useState<Product[] | null>(null);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        fetchProducts().then((res) => {
            setProducts(res.data.allProducts);
            setTotal(res.data.total);
        });
    }, []);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    ...gridTemplate,
                }}
            >
                <Box>ID</Box>
                <Box></Box>
                <Box>Title</Box>
                <Box>Price</Box>
            </Box>
            {products
                ? products.map((product) => (
                      <Box
                          key={Math.random()}
                          sx={{
                              '& a': {
                                  ...gridTemplate,
                                  textDecoration: 'none',
                                  color: 'inherit',
                              },
                              '& img': {
                                  display: 'flex',
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                  borderRadius: '50px',
                              },
                          }}
                      >
                          <Link to={`${product.id}`}>
                              <Box>{product.id}</Box>
                              <Box sx={{ width: '80px', height: '80px' }}>
                                  <img src={BASE_URL + product.images[0]} />
                              </Box>
                              <Box> {product.title}</Box>
                              <Box>{localePrice(product.price)}</Box>
                          </Link>
                      </Box>
                  ))
                : null}
            <Paginator
                total={total}
                customEvent={(page: number) => {
                    fetchProducts(page).then((res) => {
                        setProducts(res.data.allProducts);
                        setTotal(res.data.total);
                    });
                }}
            />
        </Box>
    );
};
