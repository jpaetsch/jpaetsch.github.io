import { Outlet } from 'react-router-dom';
import SidebarFixed from '../SidebarFixed';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <SidebarFixed />
            <div className='page'>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;