import { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ' Jacob'.split('');

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
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                <br />
                <div className='word-scroller'>
                    <span>
                        Computer Engineer<br />
                        Software Developer<br />
                        Data Analyst<br />
                        Lifelong Learner
                    </span>
                </div>
                </h1>
                <Link to='/contact' className='contact-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default Home;