import React, { useRef } from 'react'
import "./Contact.css";

import emailjs from '@emailjs/browser';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_bi8ktqh', 'template_ne8s4sk', form.current, 'NBYedyI1Q7Iy2os18')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section className="contact container section" id="contact">
            <h2 className="section_title">Get In Touch</h2>

            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything!</h3>
                    <p className="contact_details">Don't like forms? Send me an email 👋</p>
                </div>

                <form className="contact_form" ref={ form } onSubmit={ sendEmail }>
                    <div className="contact_form-group">

                        <div className="contact_form-div">
                            <input type="text" className="contact_form-input" placeholder='Insert your name' name="user_name" required/>
                        </div>

                        <div className="contact_form-div">
                            <input type="email" className="contact_form-input" placeholder='Insert your email' name="user_email" required/>
                        </div>

                    </div>

                    <div className="contact_form-div">
                        <input type="text" className="contact_form-input" placeholder='Insert your subject' name="subject" required/>
                    </div>

                    <div className="contact_form-div contact_form-area">
                        <textarea name="message" id="" cols="30" rows="10" className='contact_form-input' placeholder='Write your message' required>
                        </textarea>
                    </div>

                    <button className="btn" type='submit'>Send Messege</button>

                </form>
            </div>
        </section>
    )
}

export default Contact