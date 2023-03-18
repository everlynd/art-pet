import { FunctionComponent } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
// import Sidebar from '../../components/Sidebar/Sidebar';

export const WithLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function WithLayoutComponent(props: T): JSX.Element {
        return (
            <>
                <Header currentPage={'Control-panel'} />
                <Sidebar />
                <div className="cp-container">
                    {/* <Component {...props} /> */}
                    <Outlet />
                </div>
            </>
        );
    };
};
