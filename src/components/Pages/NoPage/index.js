import SidebarFixed from '../../SidebarFixed';
import useViewPort from '../../Hooks/useViewPort';
import SidebarHamburger from '../../SidebarHamburger';
import './index.scss';


const NoPage = () => {

    const { width } = useViewPort();
    const breakpoint = 800;

    return (
        <>
        {width < breakpoint ? <SidebarHamburger /> : <SidebarFixed />}
        <h1 className='temporary'>Sorry, but the page you're looking for doesn't seem to exist...</h1>
        </>
    );
};

export default NoPage;