import './index.scss';
import Loader from 'react-loaders';
import useViewPort from '../../Hooks/useViewport';
import React from 'react';
import SidebarFixed from '../../SidebarFixed';
import SidebarHamburger from '../../SidebarHamburger';


const ProjectsPage = () => {
    
    const { width } = useViewPort();
    const breakpoint = 600;
    
    return (
        <>
        {width < breakpoint ? <SidebarHamburger /> : <SidebarFixed />}
        <div className='container projects-page'>
            <div className='text-zone'>
                <p>I have big plans for this page! However, at the moment it is under construction.</p>
                <br />
                <p>Please check back later, I promise that content is coming shortly!</p>
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