import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate');

    const strAboutMe = 'About me'.split('');

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    return(
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
                        {/* continue with fontawesomeicon here!! */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;