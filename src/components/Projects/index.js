import './index.scss';
import Loader from 'react-loaders';

const Projects = () => {

    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <p> test </p>
            </div>
        </div>
        <div className='hex-projects-container'>
            <div className='hex'>
                <div className='shape'>

                </div>
            </div>
            <div className='hex'>
                <div className='shape'>
                    
                </div>
            </div>
            <div className='hex'>
                <div className='shape'>
                    
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default Projects;