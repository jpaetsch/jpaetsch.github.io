import './index.scss';
import Loader from 'react-loaders';
import useViewPort from '../../Hooks/useViewport';
// import ViewportContext from '../../Contexts/ViewportContext';
import React from 'react';

// BEGIN TEST RESPONSIVE
const SmallComment = () => <p>Screen is small!</p>;
const BigComment = () => <p>Screen is big!</p>

// const useViewport = () => {
//     const {width, height} = React.useContext(ViewportContext);
//     return {width, height};
// };

// END TEST RESPONSIVE

const ProjectsPage = () => {
    
    // BEGIN TEST RESPONSIVE
    const { width } = useViewPort();
    console.log(width);
    const breakpoint = 600;
    // END TEST RESPONSIVE
    
    return (
        <>
        <div className='container projects-page'>
            <div className='text-zone'>
                <p>I have big plans for this page! However, at the moment it is under construction.</p>
                <br />
                <p>Please check back later, I promise that content is coming shortly!</p>
                {/* BEGIN TEST RESPONSIVE */}
                <br />
                {width < breakpoint ? <SmallComment /> : <BigComment />}
                {/* END TEST RESPONSIVE */}
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

export default ProjectsPage;