import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import homeBackground1 from '../../assets/images/homeBackground1.jpg'
import homeBackground2 from '../../assets/images/homeBackground2.jpg'
import homeBackground3 from '../../assets/images/homeBackground3.jpg'
import homeBackground4 from '../../assets/images/homeBackground4.jpg'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ' Jacob!'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000);
    }, []);

    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
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
            <div className='timeline'>
                <div className='tl-item'>
                    <div className='tl-bg' style={{backgroundImage: `url(${homeBackground4})`}}></div>
                    <div className='tl-title'>
                        <p>Work</p>
                    </div>
                    <div className='tl-content'>
                        <h1>My Experience</h1>
                        <p>Throughout my degree and outside of school, I've worked at a number of companies and gained exposure to a wide range of technical skills.<br /><br />From backend system frameworks to frontend design libraries, I have experience in many different programming languages and architectural design concepts.</p>
                        <br />
                        <Link to='/about' className='sub-button'>View Skills</Link>
                    </div>
                </div>
                <div className='tl-item'>
                    <div className='tl-bg' style={{backgroundImage: `url(${homeBackground3})`}}></div>
                    <div className='tl-title'>
                        <p>Projects</p>
                    </div>
                    <div className='tl-content'>
                        <h1>My Showcases</h1>
                        <p>There's no better way to learn than to get hands-on. I have a number of projects I like to develop outside of work to help with my own learning.<br /><br />One of these projects includes making this website from scratch using React and SCSS! See my GitHub repository for additional projects and code samples.</p>
                        <br />
                        <Link to='/projects' className='sub-button'>View Portfolio</Link>
                    </div>
                </div>
                <div className='tl-item'>
                    <div className='tl-bg' style={{backgroundImage: `url(${homeBackground2})`}}></div>
                    <div className='tl-title'>
                        <p>Hobbies</p>
                    </div>
                    <div className='tl-content'>
                        <h1>My Activities</h1>
                        <p>Since my job involves a lot of sitting, I like a variety of active hobbies! These include rock climbing, biking, basketball, and photography.<br /><br />Although I don't have a website page dedicated to showing off my pictures or other hobbies, contact me if you think I should add a page for this content!</p>
                        <br />                    
                        <Link to='/contact' className='sub-button'>Get In Touch</Link>
                    </div>
                </div>
                <div className='tl-item'>
                    <div className='tl-bg' style={{backgroundImage: `url(${homeBackground1})`}}></div>
                    <div className='tl-title'>
                        <p>School</p>
                    </div>
                    <div className='tl-content'>
                        <h1>My Education</h1>
                        <p>After taking AP courses in high school, I went straight into the engineering program at the University of Alberta. I recently graduated with my Computer Engineering degree.<br /><br />In the future, I am interested in going back for my MBA or other master's level business degree after getting more industry experience. In addition, I am strongly considering getting a certificate in personal training one day!</p>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default Home;