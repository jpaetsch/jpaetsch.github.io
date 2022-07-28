import Sidebar from '../../Sidebar';
import './index.scss';

const NoPage = () => {
    return(
        <>
        <Sidebar />
        <h1 className='temporary'>Sorry, but the page you're looking for doesn't seem to exist...</h1>
        </>
    );
};

export default NoPage;