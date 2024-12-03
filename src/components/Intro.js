import React from 'react';
import img from '../images/Web-developer.svg';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const Intro = () => {
  const { t } = useTranslation(); // Initialize the translation functionc
    
    return (
        <>
                <div className="m-auto max-w-8xl p-2 md:p-12 h-5/6" id='about' >

                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="fade-up">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <img alt="card img" className="rounded-t float-right w-54 h-54" src={img} />
                        </div>
                        <div className="flex-col my-4 text-center lg:text-left lg:my-0 lg:justify-end w-full lg:w-1/2 px-8" data-aos="zoom-in" data-aos-delay="500">
                            
                            <h3 className="text-3xl  text-fuchsia-900 font-bold">{t('intro.heading')}</h3>
                            <div className='my-3 text-xl text-gray-600 font-semibold text-justify'>
    {/* <p className='my-3 text-xl text-gray-600 font-semibold text-justify'>
        With <span className='text-purple-700 font-bold'> */}
        {t('intro.para1')}
            {/* 30+ years of expertise</span>, <span className='text-purple-700 font-bold'>Medha Enterprises</span> has established itself as a trusted name in the manufacturing of premium metal signage and nameplates. Since our incorporation in <span className='text-purple-700 font-bold'>1992</span> in <span className='text-purple-700 font-bold'>Mumbai, Maharashtra</span>, we have been delivering precision-engineered solutions tailored to meet unique client requirements. */}
    {/* </p> */}
</div>
<div className='my-3 text-xl text-gray-600 font-semibold text-justify'>
{t('intro.para2')}
    {/* <p className='my-3 text-xl text-gray-600 font-semibold text-justify'>
        We operate from our registered office in <span className='text-purple-700 font-bold'>Mumbai</span> and two manufacturing units—one in <span className='text-purple-700 font-bold'>Khed MIDC</span> and the other in <span className='text-purple-700 font-bold'>Dahisar, Mumbai</span>. These facilities enable us to uphold exceptional craftsmanship and ensure the reliability of every product we manufacture.
    </p> */}
</div>
<div className='my-3 text-xl text-gray-600 font-semibold text-justify'>
{t('intro.para3')}
    {/* <p className='my-3 text-xl text-gray-600 font-semibold text-justify'>
        Our specialization lies in creating high-quality <span className='text-purple-700 font-bold'>Aluminum Nameplates</span>, <span className='text-purple-700 font-bold'>Stainless Steel Nameplates</span>, <span className='text-purple-700 font-bold'>Sign Boards</span>, <span className='text-purple-700 font-bold'>Copper Yantras</span>, <span className='text-purple-700 font-bold'>SS Eitching Plates</span>, <span className='text-purple-700 font-bold'>Engraving Plates</span> and <span className='text-purple-700 font-bold'>Brass Plates</span>. Each product is designed to enhance the efficiency and branding of businesses.
    </p> */}
</div>

<div className='my-3 text-xl text-gray-600 font-semibold text-justify'>
{t('intro.para4')}
    {/* <p className='my-3 text-xl text-gray-600 font-semibold text-justify'>
        Guided by <span className='text-purple-700 font-bold'>experienced leadership</span>, we have built a strong reputation for delivering <span className='text-purple-700 font-bold'>exceptional quality</span> and <span className='text-purple-700 font-bold'>customized solutions</span>, ensuring client satisfaction and trust in every project across <span className='text-purple-700 font-bold'>India</span>.
    </p> */}
</div>

                            <Link to="/contact" className="text-white bg-fuchsia-900 hover:bg-purple-900 inline-flex items-center justify-center w-full px-6 py-2 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0 group">
                                {/* Contact us */}
                                {t('intro.contactUs')}
                                <svg className="w-4 h-4 ml-1 group-hover: translate-x-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default Intro;