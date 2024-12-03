import React from 'react';
import TULA from '../images/clients/TULA.png';
import HDFC from '../images/clients/HDFC.jpg';
import ABB from '../images/clients/ABB.png';
import MHADA from '../images/clients/MHADA.png';
import VIJAYF from '../images/clients/VIJAYFIRE.png';
import HILDEN from '../images/clients/HILDEN.jpg';
import SANGHI from '../images/clients/SANGHI.jpg';
import SUNPHARMA from '../images/clients/SUNPHARMA.jpg';
import ANILENG from '../images/clients/ANILENG.png';
import ARGOX from '../images/clients/ARGOX.png';
import FLUIDTECQ from '../images/clients/FLUIDTECH.png'
import AIROPOWER from '../images/clients/AIROPOWER.png'
import ASIATICWELDERS from '../images/clients/ASIATICWELDERS.png'
import BMC from '../images/clients/BMC.png'
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const clientImages1 = [ABB, TULA, SANGHI, HDFC, HILDEN,FLUIDTECQ, ASIATICWELDERS];
const clientImages2 = [MHADA, VIJAYF, SUNPHARMA, ANILENG, ARGOX, AIROPOWER, BMC];

const Clients = () => {
  const { t } = useTranslation(); // Initialize the translation functionc

    
    return (
        <div className="mt-8 bg-gray-100">
            {/* Embedded CSS */}
            <style>
                {`
                @keyframes scroll-left {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-right {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(50%);
                    }
                }

                #scroller-in-row1,
                #scroller-in-row2 {
                    display: flex;
                    animation-duration: 50s;
                    animation-timing-function: linear;
                    animation-iteration-count: infinite;
                }

                #scroller-in-row1 {
                    animation-name: scroll-left;
                }

                #scroller-in-row2 {
                    animation-name: scroll-right;
                }

                @media (max-width: 768px) {
                    #scroller-in-row1, #scroller-in-row2 {
                        animation-duration: 100s; /* Slower on tablets */
                    }
                }

                @media (max-width: 480px) {
                    #scroller-in-row1, #scroller-in-row2 {
                        animation-duration: 20s; /* Slower on smaller screens */
                    }
                }

                /* Ensure that images repeat smoothly */
                .scroller-row {
                    display: flex;
                    flex-wrap: nowrap;
                    overflow: hidden;
                    width: 100%;
                }

                .scroller-item {
                    flex-shrink: 0;
                    width: 16rem; /* Adjust width to suit your design */
                    height: 12rem; /* Adjust height to suit your design */
                    margin-right: 1rem;
                    border: 3px solid #701a75; /* Border color */
                    border-radius: 8px;
                    overflow: hidden;
                }

                .scroller-item img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                `}
            </style>

            <section data-aos="fade-up">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">
              {t('clients.heading')}
                    </h2>
                    <div className="flex justify-center">
                        <div className="w-24 border-b-4 border-fuchsia-900"></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-fuchsia-900">
                    {t('clients.fewclients')}

                    </h2>
                </div>

                {/* Scrolling Rows */}
                <div className="overflow-hidden">
                    {/* Row 1: Scrolling Left */}
                    <div className="scroller-row">
                        <div id="scroller-in-row1">
                            {[...clientImages1, ...clientImages1, ...clientImages1, ...clientImages1, ...clientImages1].map((image, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="scroller-item"
                                >
                                    <img
                                        src={image}
                                        alt={`client-row1-${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2: Scrolling Left */}
                    <div className="scroller-row mt-6">
                        <div id="scroller-in-row1">
                            {[...clientImages2, ...clientImages2, ...clientImages2, ...clientImages2, ...clientImages2].map((image, index) => (
                                <div
                                    key={`row1-${index}`}
                                    className="scroller-item"
                                >
                                    <img
                                        src={image}
                                        alt={`client-row1-${index}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* <div className="my-4 py-4">
                    <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-fuchsia-900">And many more...</h2>
                </div> */}
            </section>
        </div>
    );
};

export default Clients;
