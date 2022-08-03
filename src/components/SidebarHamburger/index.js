import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faHome, faUser, faFolderTree, faFileArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import ProfilePic from '../../assets/images/profile-pic.jpg';
import Signature from '../../assets/images/name-signature.png';
import Resume from '../../assets/files/Resume.pdf';
import './index.scss';


const SidebarHamburger = () => {
    return (
        <div className='nav-bar-hamburger'>
            <input className='hamburger-toggle' id='hamburger-toggle' type='checkbox' />
            <label className='hamburger-icon-toggle' for='hamburger-toggle'>
                <div className='spinner diagonal-line-1'></div>
                <div className='spinner horizontal-line'></div>
                <div className='spinner diagonal-line-2'></div>
            </label>
            <div className='hamburger-menu'>
                <img className='upper-pic' src={ProfilePic} alt='Jacob' />
                <img className='lower-name' src={Signature} alt='Paetsch' />
                <nav>
                    <NavLink exact='true' activeclassname='active' to='/'>
                        <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>&nbsp;&nbsp;&nbsp;&nbsp;HOME
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='about-link' to='/about'>
                        <FontAwesomeIcon icon={faUser} color='#4d4d4e' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ABOUT
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='projects-link' to='/projects'>
                        <FontAwesomeIcon icon={faFolderTree} color='#4d4d4e' />&nbsp;&nbsp;&nbsp;&nbsp;PROJECTS
                    </NavLink>
                    <NavLink exact='true' activeclassname='active' className='contact-link' to='/contact'>
                        <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />&nbsp;&nbsp;&nbsp;&nbsp;CONTACT
                    </NavLink>
                </nav>
                <div className='footer-buttons'>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/jacob-paetsch/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                    <a target='_blank' rel='noreferrer' href='https://github.com/jpaetsch'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                    <a target='_blank' rel='noreferrer' href={Resume} className='contact-button' download>
                        <FontAwesomeIcon icon={faFileArrowDown} color='#4d4d4e' />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SidebarHamburger;