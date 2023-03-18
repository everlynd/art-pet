import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { Users } from './view/components/Users/Users';
import { ProductsPage } from './view/pages/ProductsPage/ProductsPage';
import { ProductCreate } from './view/components/Products/ProductCreate';
import { CategoryPage } from './view/pages/CatergoryPage/CategoryPage';
import { ProductPageLoader } from './view/components/Products/Products.helper';
import { CategoryEditPage } from './view/pages/CategoryEditPage/CategoryEditPage';
import { CategoryLoader } from './view/components/Categories/CreateCategory/Category.helper';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="users" element={<Users />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<ProductCreate />} loader={ProductPageLoader} />
            <Route path="product-create" element={<ProductCreate />} loader={ProductPageLoader} />
            <Route path="categories" element={<CategoryPage />} />
            <Route path="categories/:id" element={<CategoryEditPage />} loader={CategoryLoader} />
        </Route>,
    ),
);

ReactDOM.createRoot(document.getElementById('controlPanel') as HTMLElement).render(<RouterProvider router={router} />);
