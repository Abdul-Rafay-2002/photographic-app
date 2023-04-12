import React, { useState } from 'react';
import './Contact.scss';
import { client } from '../../client';
import contactimg from '../../Assets/contact.svg';
import {motion} from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '', subject: '', phone: ''});
    const [isFormSubmmited, setIsFormSubmmited] = useState(false);
    const [loading, setLoading] = useState(false);

    const { name, email, message, subject, phone } = formData;
    const handleChangeInput = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }
    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.name,
            email: formData.email,
            message: formData.message,
            subject: formData.subject,
            phone: formData.phone,
        }

        client.create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmmited(true);
            })  
            .catch((err) => console.log(err));
    };

    return (
        <div id='contact' className='app__primary'>
            <div className='app__container'>
                <div className='app__contact-header'>
                    <h2> Book your slots now!</h2>
                    <p>
                        Have a question, comment, or just want to say hello? We'd love to
                        hear from you!
                        <br /> Fill out the form below and we'll get back to you as soon as
                        possible.
                    </p>
                </div>
                <div className="app__contact-content">
                    {!isFormSubmmited ?
                        <div className="app__contact-form">
                            <div className="app__contact-form-head">
                                <input type="text" placeholder='Your Name' value={name} onChange={handleChangeInput} name='name' />
                                <input type="email" placeholder='Your Email' value={email} onChange={handleChangeInput} name='email' />
                            </div>
                            <div className="app__contact-form-head">
                                <input type="text" placeholder='Your Subject' value={subject} onChange={handleChangeInput} name='subject' />
                                <input type="text" placeholder='Your Phone' value={phone} onChange={handleChangeInput} name='phone' />
                            </div>
                            <div className="app__contact-form-body">
                                <textarea name="message" id="" cols="10" rows="7" onChange={handleChangeInput} placeholder='Your Message' value={message} />
                                <div className="app__contact-form-body-buttons">
                                    <button type="button" onClick={handleSubmit}> {loading ? 'Sending...' : 'Send Message'} </button>
                                </div>
                            </div>
                        </div>
                        :
                        <h4 style={{ textAlign: 'center' }}>Thanks for reaching out! We'll get back to you as soon as possible!</h4>
                    }

                    <motion.div className='app__contact-img'>
                        <LazyLoadImage src={contactimg} alt='contact-us'/>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
