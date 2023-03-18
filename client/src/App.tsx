import { Footer } from './view/Components/Footer/Footer';
import { Header } from './view/Components/Header/Header';
import { createContext } from 'react';
import { SubscribeBlock } from './view/Components/SubscribeBlock/Subscribeblock';
import { Outlet, useLocation } from 'react-router-dom';
import { RootStore } from './data/store/rootStore';
import { BreadCrumbs } from './view/Components/BreadCrumbs/BreadCrumbs';

const rootStore = new RootStore();
export const Context = createContext({ rootStore });

export const App = () => {
    const location = useLocation();
    return (
        <Context.Provider value={{ rootStore }}>
            <div className="App">
                <Header />
                {location.pathname === '/' ? null : <BreadCrumbs location={location} />}
                <Outlet />
                <SubscribeBlock />
                <Footer />
            </div>
        </Context.Provider>
    );
};
