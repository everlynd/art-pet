import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/css/index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HomePage } from './view/Pages/HomePage/HomePage';
import { ProductPage } from './view/Pages/ProductPage/ProductPage';
import { ProductPageLoader } from './view/Pages/ProductPage/ProductPage.helper';
import { CatalogPage } from './view/Pages/CatalogPage/CatalogPage';
import { CatalogLoader } from './view/Pages/CatalogPage/CatalogPage.helper';
import { LoginPage } from './view/Pages/LoginPage/LoginPage';
import { RegisterPage } from './view/Pages/RegisterPage/RegisterPage';
import { CartPage } from './view/Pages/CartPage/CartPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={'hehehe a ya ehse ne sdelal'}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductPage />} loader={ProductPageLoader} />
            <Route path="catalog/:id" element={<CatalogPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="cart" element={<CartPage />} />
            {/* <Route path="users" element={<Users />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductCreate />} loader={ProductPageLoader} />
            <Route path="product-create" element={<ProductCreate />} loader={ProductPageLoader} />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="categories/:id" element={<CategoryEditPage />} loader={CategoryLoader} /> */}
        </Route>,
    ),
);

let container: null | HTMLElement = null;

document.addEventListener('DOMContentLoaded', function (event) {
    if (!container) {
        container = document.getElementById('root') as HTMLElement;
        const root = ReactDOM.createRoot(container);
        root.render(<RouterProvider router={router} />);
    }
});
