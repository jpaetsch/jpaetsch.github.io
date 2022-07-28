import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import Sidebar from '../../Sidebar';
import { useEffect, useState } from 'react';
import { faAndroid, faAws, faCanadianMapleLeaf, faDocker, faGithubSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Loader from 'react-loaders';

const AboutPage = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const strAboutMe = 'About Me'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return (
        <>
        <Sidebar />
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={strAboutMe} idx={15} />
                </h1>
                <p>
                    I'm a recent University of Alberta Computer Engineering graduate
                    looking for a full time role working on exciting new technologies in
                    diverse, team-oriented projects.
                </p>
                <p>
                    I am especially interested in fullstack development and gaining a variety of
                    development experience. I hope gain years of industry experience before returning
                    to school for an MBA to improve my project management skills and business prowess.
                </p>
                <p>
                    I am ambitious, am a lifelong learner, and love to take on new challenges in both my
                    work and personal life. Outside of work I enjoy a variety of hobbies such as
                    rock climbing, photography, and playing a variety of sports with friends.
                </p>
            </div>
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAndroid} color='#3ddc84' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faAws} color='#ff9900' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCanadianMapleLeaf} color='#dd0031' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faDocker} color='#0db7ed' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGithubSquare} color='#171515' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='line-scale' />
        </>
    );
};

export default AboutPage;