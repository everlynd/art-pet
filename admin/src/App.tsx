import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import './App.css';
import { WithLayout } from './view/Layouts/HOC/WIthLayout';
import { Users } from './view/components/Users/Users';
import { ProductCreate } from './view/components/Products/ProductCreate';
import { ProductsPage } from './view/pages/ProductsPage/ProductsPage';
import { CategoryPage } from './view/pages/CatergoryPage/CategoryPage';
// import { ProductPage } from './view/pages/ProductPage/ProductPage';

function ControlApp() {
    return (
        <div className="App">
            {/* <RouterProvider router={router} /> */}
        </div>
    );
}

export default WithLayout(ControlApp);
