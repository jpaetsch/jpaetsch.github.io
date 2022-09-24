import { Outlet } from 'react-router-dom';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <div className='default-layout'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;