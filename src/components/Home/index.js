import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import ProfilePic from '../../assets/images/profile-pic.jpg'


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
                        Data Analyst<br />
                        Lifelong Learner
                    </span>
                </div>
                <Link to='/contact' className='contact-button'>CONTACT ME</Link>
            </div>
            {/* <div className='image-slides-container'>
                <div className='slide-content'>
                    <p className='slide-content'>Slide #1 Content</p>
                </div>
            </div> */}

            <div className='timeline'>
                <div className="tl-item">
                    <div className="tl-bg im1"></div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">2011</p>
                    </div>
                    <div className="tl-content">
                        <h1>Lorem ipsum dolor sit</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg im2"></div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">2013</p>
                    </div>
                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Vestibulum laoreet lorem</h1>
                        <p>Suspendisse potenti. Sed sollicitudin eros lorem, eget accumsan risus dictum id. Maecenas dignissim ipsum vel mi rutrum egestas. Donec mauris nibh, facilisis ut hendrerit vel, fringilla sed felis. Morbi sed nisl et arcu.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg im3"></div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">2014</p>
                    </div>
                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Phasellus mauris elit</h1>
                        <p>Mauris cursus magna at libero lobortis tempor. Suspendisse potenti. Aliquam interdum vulputate neque sit amet varius. Maecenas ac pulvinar nisi. Fusce vitae nunc ultrices, tristique dolor at, porttitor dolor. Etiam id cursus arcu, in dapibus nibh. Pellentesque non porta leo. Nulla eros odio, egestas quis efficitur vel, pretium sed.</p>
                    </div>
                </div>
                <div className="tl-item">
                    <div className="tl-bg im4"></div>
                    <div className="tl-year">
                        <p className="f2 heading--sanSerif">2016</p>
                    </div>
                    <div className="tl-content">
                        <h1 className="f3 text--accent ttu">Mauris vitae nunc elem</h1>
                        <p>Suspendisse ac mi at dolor sodales faucibus. Nunc sagittis ornare purus non euismod. Donec vestibulum efficitur tortor, eget efficitur enim facilisis consequat. Vivamus laoreet laoreet elit. Ut ut varius metus, bibendum imperdiet ex. Curabitur diam quam, blandit at risus nec, pulvinar porttitor lorem. Pellentesque dolor elit.</p>
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default Home;