import SidebarFixed from '../../SidebarFixed';
import './index.scss';

const NoPage = () => {
    return(
        <>
        <SidebarFixed />
        <h1 className='temporary'>Sorry, but the page you're looking for doesn't seem to exist...</h1>
        </>
    );
};

export default NoPage;