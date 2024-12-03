import React from 'react';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/Completion25yrs.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const Completion25Yrs = () => {
    const { t } = useTranslation(); // Initialize the translation function

    return (
        <>
            <div className="hero" id="hero">
                <div>
                    <NavBar />
                </div>

                <div className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6" data-aos="zoom-in">
                    <div id="hero" className="flex flex-col lg:flex-row py-8 justify-between text-center lg:text-left">
                        {/* Left Section */}
                        <div
                            className="lg:w-1/2 flex flex-col justify-center"
                            data-aos="zoom-in"
                            data-aos-delay="200"
                        >
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-fuchsia-900">
                                {t('completion25yrs.title')}
                            </h1>
                            <div className="text-xl font-semibold tracking-tight mb-5 text-gray-500">
                                {t('completion25yrs.description')}
                            </div>
                        </div>

                        {/* Right Section */}
                        <div
                            className="flex lg:justify-end w-full lg:w-1/2"
                            data-aos="fade-up"
                            data-aos-delay="700"
                        >
                            <img
                                alt="Celebration Image"
                                className="rounded-t float-right w-[600px] h-[450px] duration-1000 border-[3px] border-fuchsia-900"
                                src={heroImg}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Completion25Yrs;
