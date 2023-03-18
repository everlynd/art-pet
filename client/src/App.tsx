import { Footer } from './view/Components/Footer/Footer';
import { Header } from './view/Components/Header/Header';
import { createContext } from 'react';
import { SubscribeBlock } from './view/Components/SubscribeBlock/Subscribeblock';
import { Outlet } from 'react-router-dom';
import { RootStore } from './data/store/rootStore';

const rootStore = new RootStore();
export const Context = createContext({ rootStore });

export const App = () => {
    return (
        <Context.Provider value={{ rootStore }}>
            <div className="App">
                <Header />
                <Outlet />
                <SubscribeBlock />
                <Footer />
            </div>
        </Context.Provider>
    );
};
