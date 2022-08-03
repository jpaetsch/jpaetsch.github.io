import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser, faFolderTree, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import ProfilePic from '../../assets/images/profile-pic.jpg';
import Signature from '../../assets/images/name-signature.png';
import Resume from '../../assets/files/Resume.pdf';
import './index.scss';

const SidebarFixed = () => {
    return (
        <div className='nav-bar-fixed'>
            <Link className='top-widget' to='/'>
                <img className='upper-pic' src={ProfilePic} alt='Jacob' />
                <img className='lower-name' src={Signature} alt='Paetsch' />
            </Link>
            <nav>
                <NavLink exact='true' activeclassname='active' to='/'>
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                    <FontAwesomeIcon icon={faFolderTree} color='#4d4d4e' />
                </NavLink>
                <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jacob-paetsch/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/jpaetsch'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href={Resume} className='contact-button' download>
                        <FontAwesomeIcon icon={faFileArrowDown} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default SidebarFixed;