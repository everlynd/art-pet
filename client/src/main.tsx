import ReactDOM from 'react-dom/client';
import { App } from './App';
import './assets/css/index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { HomePage } from './view/Pages/HomePage/HomePage';
import { ProductPage } from './view/Pages/ProductPage/ProductPage';
import { ProductPageLoader } from './view/Pages/ProductPage/ProductPage.helper';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="product/:id" element={<ProductPage />} loader={ProductPageLoader} />
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
