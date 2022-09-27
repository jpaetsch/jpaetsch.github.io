import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../../AnimatedLetters';
import SidebarFixed from '../../SidebarFixed';
import useViewPort from '../../Hooks/useViewPort';
import SidebarHamburger from '../../SidebarHamburger';
import './index.scss';
import homeBackground1 from '../../../assets/images/homeBackground1.jpg';
import homeBackground2 from '../../../assets/images/homeBackground2.jpg';
import homeBackground3 from '../../../assets/images/homeBackground3.jpg';
import homeBackground4 from '../../../assets/images/homeBackground4.jpg';
import HorizontalImageFlex from '../../HorizontalImageFlex';


const HomePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ' Jacob!'.split('');

    const flexImages = [
        {image: homeBackground4, title: 'Work', header: 'My Experience', paragraphOne: 'I\'ve worked academically and in industry with several companies, gaining exposure to a wide range of software and hardware technical skills.', paragraphTwo: 'From backend system frameworks to frontend design libraries, I have experience in distinct programming languages and architectural design concepts.', buttonTo: '/about', buttonText: 'VIEW SKILLS'},
        {image: homeBackground3, title: 'Projects', header: 'My Showcases', paragraphOne: 'There\'s no better way to learn than to get hands-on. I have a number of projects I like to develop outside of work to help with my own learning.', paragraphTwo: 'One of these projects includes making this website from scratch using React and SCSS! Check out my projects page or see my GitHub repository for code samples.', buttonTo: '/projects', buttonText: 'VIEW PORTFOLIO'},
        {image: homeBackground2, title: 'Hobbies', header: 'My Activities', paragraphOne: 'Since my job involves a lot of sitting and staring at lines of code, I like a variety of active hobbies! These include rock climbing, biking, basketball, and photography.', paragraphTwo: 'I was thinking about adding a page to show off my photography. Contact me if you think I should add my pictures as content to this site!', buttonTo: '/contact', buttonText: 'CONTACT ME'},
        {image: homeBackground1, title: 'School', header: 'My Education', paragraphOne: 'I recently obtained my BSc. Computer Engineering degree from the University of Alberta. I went straight into engineering after taking AP courses in high school.', paragraphTwo: 'I am interested in going back for my MBA after getting more industry experience. I am also considering getting a certificate in personal training one day!', buttonTo: '', buttonText: ''},
    ];

    const { width } = useViewPort();
    const breakpointSidebar = 800;
    const breakpointTwo = 1060;

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);

    return (
        <>
            {width < breakpointSidebar ? <SidebarHamburger /> : <SidebarFixed />}
            <div className='home-page' style={{flexDirection: width < breakpointTwo ? 'column' : 'row', marginLeft: width < breakpointSidebar ? '0px' : '70px'}}>
                <div className='text-container'>
                    <h1>
                        <div className='first-line'>
                            <span className={`${letterClass} _11`}>H</span>
                            <span className={`${letterClass} _12`}>e</span>
                            <span className={`${letterClass} _13`}>y,</span>
                        </div>
                        <br/>
                        <div className='second-line'>
                            <span className={`${letterClass} _17`}>I</span>
                            <span className={`${letterClass} _18`}>'m</span>
                            <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={19} />
                        </div>
                    </h1>
                    <div className='word-scroller'>
                        <span>
                            Computer Engineer<br />
                            Software Developer<br />
                            Business Analyst<br />
                            Lifelong Learner
                        </span>
                    </div>
                    <Link to='/contact' className='contact-button'>CONTACT ME</Link>
                </div>
                <div className='content-container'>
                    <HorizontalImageFlex itemArray={flexImages}></HorizontalImageFlex>
                </div>
            </div>
        </>






        // <>
        // 
        
        //     <div className='container home-page' style={{overflow: width < breakpointTwo ? 'visible' : 'hidden'}}>
        //         <div className='page-section'>
        //             <div className='text-zone' style={{left: width < breakpoint ? '50px' : '120px'}}>
                        // <h1>
                        //     <span className={`${letterClass} _11`}>H</span>
                        //     <span className={`${letterClass} _12`}>e</span>
                        //     <span className={`${letterClass} _13`}>y,</span>
                        //     <br />
                        //     <span className={`${letterClass} _14`}>I</span>
                        //     <span className={`${letterClass} _15`}>'m</span>
                        //     <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                        //     <br />
                        // </h1>
                        // <div className='word-scroller'>
                        //     <span>
                        //         Computer Engineer<br />
                        //         Software Developer<br />
                        //         Business Analyst<br />
                        //         Lifelong Learner
                        //     </span>
                        // </div>
                        // <Link to='/contact' className='contact-button'>CONTACT ME</Link>
        //             </div>



        //             <div className='horizontal-image-flex-container'><HorizontalImageFlex itemArray={flexImages}></HorizontalImageFlex></div>
        //         </div>
        //         <div className='page-section'>
        //             <h1>Test test test test test</h1>
        //             <br/>
        //             <br/>
        //             <br/>
        //             <br/>
        //             <br/>
        //             <br/>
        //             <h1>Test test test test</h1>
        //         </div>
        //     </div>
        // <Loader type='line-scale' />
        // </>
    );
};

export default HomePage;