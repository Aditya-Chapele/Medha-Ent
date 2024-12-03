import React, { useState } from 'react';
import NavBar from '../components/Navbar/NavBar';
import Footer from '../components/Footer';
import { useDocTitle } from '../components/CustomHook';
import emailjs from 'emailjs-com';  // Import EmailJS
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const Contact = () => {
  const { t } = useTranslation(); // Initialize the translation functionc

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when this component is rendered
    }, []);
    
    useDocTitle('Medha Enterprises');

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState([]);

    // Function to clear errors
    const clearErrors = () => {
        setErrors([]);
    };

    // Function to clear form inputs after successful send
    const clearInput = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
    };

    // Form validation before sending
    const validateForm = () => {
        const formErrors = {};
        if (!firstName) formErrors.first_name = "First Name is required.";
        if (!lastName) formErrors.last_name = "Last Name is required.";
        if (!email) formErrors.email = "Email is required.";
        if (!phone) formErrors.phone_number = "Phone Number is required.";
        if (!message) formErrors.message = "Message is required.";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Validate the form before sending
        if (!validateForm()) return;

        // Disable the button and show loading state
        const submitButton = document.getElementById('submitBtn');
        submitButton.disabled = true;
        submitButton.innerHTML = 'Loading...';

        // Send email using EmailJS
        const templateParams = {
            to_email: email,  // Static recipient email
            from_name: firstName,                // Sender's first name
            last_name: lastName,                 // Sender's last name
            email: email,                        // Sender's email address
            phone: phone,                        // Sender's phone number
            message: message                     // The message content
        };

        emailjs
            .send(
                'service_m1cz7ih',  // Replace with your service ID
                'template_ioozx2h',  // Replace with your template ID
                templateParams,
                'ppHZrRQymNENg4Thf'  // Replace with your user ID
            )
            .then(
                (response) => {
                    // Reset the button and clear form inputs
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message';
                    clearInput();
                    // Display success message
                    Notiflix.Report.success(
                        'Success',
                        'Your message has been sent successfully,We will respond soon',
                        'Okay'
                    );
                },
                (error) => {
                    // Reset the button after failure
                    submitButton.disabled = false;
                    submitButton.innerHTML = 'Send Message';
                    // Display error message
                    Notiflix.Report.failure(
                        'Error',
                        'An error occurred while sending the message.',
                        'Okay'
                    );
                    console.log(error);
                }
            );
    };

    return (
        <>
            <div>
                <NavBar />
            </div>
            <div id="contact" className="flex justify-center items-center mt-8 w-full bg-white py-12 lg:py-24">
                <div className="container mx-auto my-8 px-4 lg:px-20" data-aos="zoom-in">
                    <form onSubmit={sendEmail}>
                        <div className="w-full bg-white p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
                            <div className="flex">
                                <h1 className="font-bold text-center lg:text-left text-fuchsia-800 uppercase text-4xl">{t('contact.join')}</h1>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                                <div>
                                    <input
                                        name="first_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder={t('contact.fname')}
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.first_name && <p className="text-red-500 text-sm">{errors.first_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="last_name"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder={t('contact.lname')}
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.last_name && <p className="text-red-500 text-sm">{errors.last_name}</p>}
                                </div>

                                <div>
                                    <input
                                        name="email"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder={t('contact.email2')}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>

                                <div>
                                    <input
                                        name="phone_number"
                                        className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                        type="number"
                                        placeholder={t('contact.contact')}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        onKeyUp={clearErrors}
                                    />
                                    {errors.phone_number && <p className="text-red-500 text-sm">{errors.phone_number}</p>}
                                </div>
                            </div>
                            <div className="my-4">
                                <textarea
                                    name="message"
                                    placeholder={t('contact.message')}
                                    className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    onKeyUp={clearErrors}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                            </div>
                            <div className="my-2 w-1/2 lg:w-2/4">
                                <button
                                    type="submit"
                                    id="submitBtn"
                                    className="uppercase text-sm font-bold tracking-wide bg-gray-500 hover:bg-fuchsia-800 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                                >
                                    {t('contact.send')}
                                </button>
                            </div>
                        </div>
                    </form>
                    <div className="w-full lg:-mt-96 lg:w-2/6 px-8 py-6 ml-auto bg-fuchsia-800 rounded-2xl">
                        <div className="flex flex-col text-white">
                            <div className="flex my-4 w-2/3 lg:w-3/4">
                                <div className="flex flex-col">
                                    <i className="fas fa-map-marker-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl text-white">{t('contact.office')}</h2>
                                    <p className="text-gray-200">501, Varsha, Parbat Nagar,</p>
                                    <p className="text-gray-200">Dahisar (East) Mumbai-400068,</p>
                                    <p className="text-gray-200">Maharashtra , India</p>
                                </div>
                            </div>
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>

                                <div className="flex flex-col">
                                    <h2 className="text-2xl text-white">{t('contact.contact')}</h2>
                                    <p className="text-gray-200">Tel: +91 9867357279</p>
                                    {/* <div className="hidden lg:block"> */}
                                        <p className="text-gray-200">{t('contact.whatsapp')}</p>
                                    {/* </div> */}
                                    <div className='mt-5'>
                                        <h2 className="text-2xl text-white">{t('contact.email')}</h2>
                                        <p className="text-gray-200">medha.ent@gmail.com</p>
                                    </div>
                            
                                </div>
                            </div>
                            
                            <div className="flex my-4 w-2/3 lg:w-1/2">
                                <a href="#" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-fuchsia-800  w-8 mx-1 text-center pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                                </a>
                                <a href="#" target="_blank" rel="noreferrer" className="rounded-full flex justify-center bg-white h-8 text-fuchsia-800  w-8 mx-1 text-center pt-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='fill-current font-black hover:animate-pulse'><circle cx="4.983" cy="5.009" r="2.188"></circle><path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path></svg>
                                </a>
                            </div>
                            {/* <div className="flex my-4 w-2/3 lg:w-1/2">
                                <div className="flex flex-col">
                                    <i className="fas fa-phone-alt pt-2 pr-2" />
                                </div>
                                <div className="flex flex-col">
                                    <h2 className="text-2xl text-white">Call Us</h2>
                                    <p className="text-gray-200">Tel: +91 9867357279</p>
                                    <div className="hidden lg:block">
                                        <p className="text-gray-200">Also available on WhatsApp.</p>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
