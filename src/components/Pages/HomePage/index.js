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
        {image: homeBackground4, title: 'Work', header: 'My Experience', paragraphOne: 'Throughout my degree and outside of school, I\'ve worked at a number of companies and gained exposure to a wide range of technical skills.', paragraphTwo: 'From backend system frameworks to frontend design libraries, I have experience in many different programming languages and architectural design concepts.', buttonTo: '/about', buttonText: 'VIEW SKILLS'},
        {image: homeBackground3, title: 'Projects', header: 'My Showcases', paragraphOne: 'There\'s no better way to learn than to get hands-on. I have a number of projects I like to develop outside of work to help with my own learning.', paragraphTwo: 'One of these projects includes making this website from scratch using React and SCSS! See my GitHub repository for additional projects and code samples.', buttonTo: '/projects', buttonText: 'VIEW PORTFOLIO'},
        {image: homeBackground2, title: 'Hobbies', header: 'My Activities', paragraphOne: 'Since my job involves a lot of sitting, I like a variety of active hobbies! These include rock climbing, biking, basketball, and photography.', paragraphTwo: 'Although I don\'t have a website page dedicated to showing off my pictures or other hobbies, contact me if you think I should add a page for this content!', buttonTo: '/contact', buttonText: 'CONTACT ME'},
        {image: homeBackground1, title: 'School', header: 'My Education', paragraphOne: 'After taking AP courses in high school, I went straight into the engineering program at the University of Alberta. I recently graduated with my Computer Engineering degree.', paragraphTwo: 'In the future, I am interested in going back for my MBA or other masters level business degree after getting more industry experience. In addition, I am strongly considering getting a certificate in personal training one day!', buttonTo: '', buttonText: ''},
    ];

    const { width } = useViewPort();
    const breakpoint = 800;

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);

    return (
        <>
        {width < breakpoint ? <SidebarHamburger /> : <SidebarFixed />}
        <div className='container home-page'>
            <div className='text-zone' style={{left: width < breakpoint ? '3%' : '10%'}}>
                <h1>
                    <span className={`${letterClass} _11`}>H</span>
                    <span className={`${letterClass} _12`}>e</span>
                    <span className={`${letterClass} _13`}>y,</span>
                    <br />
                    <span className={`${letterClass} _14`}>I</span>
                    <span className={`${letterClass} _15`}>'m</span>
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16} />
                    <br />
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
            <div className='horizontal-image-flex-container'><HorizontalImageFlex itemArray={flexImages}></HorizontalImageFlex></div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default HomePage;