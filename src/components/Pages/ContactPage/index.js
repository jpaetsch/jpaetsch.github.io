import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../../AnimatedLetters';
import SidebarFixed from '../../SidebarFixed';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactPage = () => {

    const [letterClass, setLetterClass] = useState('text-animate');
    const [isLoading, setIsLoading] = useState(false);

    const strContactMe = 'Contact Me'.split('');

    const refContactForm = useRef();

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000);
    }, []);

    const sendEmail = (e) => {
        // prevent form submission default (page refresh, etc.) as we will handle data input ourselves
        e.preventDefault();

        setIsLoading(true);

        // This is exposed on a public repository, but I set up a new email account
        // for this api point - the worst that could happen is the 200 email quota is used up
        emailjs.sendForm(
            'service_08ipp9j',
            'template_7wxksrn',
            refContactForm.current,
            'o6N2EflqLaeoepgUP'
        )
        .then((result) => {
            alert('Message successfully sent!');
            console.log(result.text);
            setIsLoading(false);
            window.location.reload(false);
        }, (error) => {
            alert('Failed to send the message, please try again');
            setIsLoading(false);
            console.log(error.text);
        });
    };

    return (
        <>
            <SidebarFixed />
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={strContactMe} idx={15} />
                    </h1>
                    <p>
                        Please contact me so we can get connected regarding employment opportunities or
                        freelance projects. In addition, use the form below to let me know if you have 
                        any other comments or questions!
                    </p>
                    <div className='contact-form'>
                        <form ref={refContactForm} onSubmit={sendEmail}> 
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea name='message' placeholder='Message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' disabled={isLoading} />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='line-scale' />
        </>
    );
};

export default ContactPage;