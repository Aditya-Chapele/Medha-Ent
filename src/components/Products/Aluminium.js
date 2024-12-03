import React, { useEffect, useRef, useState } from 'react';
import IMG1 from '../../images/products/Aluminium1.jpg';
import IMG2 from '../../images/products/Aluminium2.jpg';
import IMG3 from '../../images/products/Aluminium3.jpg';
import IMG4 from '../../images/products/Aluminium4.jpg';
import IMG5 from '../../images/products/Aluminium5.jpg';
import IMG6 from '../../images/products/Aluminium6.jpg';
import IMG7 from '../../images/products/Aluminium7.jpg';
import IMG8 from '../../images/products/Aluminium8.jpg';
import IMG9 from '../../images/products/Aluminium9.jpg';
import IMG10 from '../../images/products/Aluminium10.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook



import NavBar from '../../components/Navbar/NavBar';
import Footer from '../Footer';

const ProductCard = ({ imgSrc, title, description, style, linkTo }) => {
    const imgRef = useRef(null);
    const [titleWidth, setTitleWidth] = useState(0);

    // Dynamically set the title width based on the image width
    useEffect(() => {
        const updateTitleWidth = () => {
            if (imgRef.current) {
                setTitleWidth(imgRef.current.offsetWidth); // Match title width to image width
            }
        };
        updateTitleWidth(); // Initial calculation
        window.addEventListener('resize', updateTitleWidth); // Update on window resize
        return () => window.removeEventListener('resize', updateTitleWidth);
    }, []);

    return (
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
            <div className="m-2 text-sm text-justify flex flex-col items-center">
                {/* Title with dynamic width */}
                <h4
                    className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12"
                    style={{
                        width: `${titleWidth}px`, // Match title width to image width
                    }}
                >
                    {title}
                </h4>
                <div className="text-md font-medium leading-5">
                    {/* Image with ref */}
                    <img
                        ref={imgRef}
                        src={imgSrc}
                        alt="Product"
                        className="border-[3px] border-fuchsia-900 rounded-lg"
                        style={{
                            objectFit: 'contain',
                            width: '350px',
                            height: '200px',
                            ...style,
                        }}
                    />
                </div>
                {/* Optional description */}
                {/* {description && (
                    <div className="my-4 text-center text-gray-600">{description}</div>
                )} */}
            </div>
        </div>
    );
};

const Aluminium = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page when this component is rendered
    }, []);
    const { t } = useTranslation(); // Initialize the translation function


    return (
        <>
            <div>
                <NavBar />
            </div>
            <div className="my-4 py-4" id="portfolio">
                <br />
                <br />
                <br />
                <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">
                    {t('aluminium.heading')}
                </h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
                </div>
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <ProductCard
                            imgSrc={IMG2}
                            loading="lazy"
                            title={t('aluminium.title1')}
                            description="Durable and corrosion-resistant brass products for your needs."
                        />
                        <ProductCard
                            imgSrc={IMG3}
                            loading="lazy"
                            title={t('aluminium.title2')}
                            description="Discover premium steel products tailored for construction and manufacturing."
                        />
                        <ProductCard
                            imgSrc={IMG4}
                            loading="lazy"
                            title={t('aluminium.title3')}
                            description="High conductivity copper products for electrical and industrial purposes."
                        />
                        <ProductCard
                            imgSrc={IMG5}
                            loading="lazy"
                            title={t('aluminium.title4')}
                            description="High conductivity copper products for electrical and industrial purposes."
                        />
                        <ProductCard
                            imgSrc={IMG6}
                            loading="lazy"
                            title={t('aluminium.title5')}
                            description="High conductivity copper products for electrical and industrial purposes."
                        />
                        <ProductCard
                            imgSrc={IMG1}
                            loading="lazy"
                            title={t('aluminium.title6')}
                            description="Displays essential machine details such as model number, serial number, capacity, and other specifications. This industrial machine nameplate is used to provide critical information for the equipment."
                            style={{ height: '350px' }}
                        />
                          <ProductCard
                            imgSrc={IMG7}
                            loading="lazy"
                            title={t('aluminium.title7')}
                            description="Displays essential machine details such as model number, serial number, capacity, and other specifications. This industrial machine nameplate is used to provide critical information for the equipment."
                            style={{ height: '350px' }}
                        />
                        <ProductCard
                            imgSrc={IMG8}
                            loading="lazy"
                            title={t('aluminium.title8')}
                            description="Displays essential machine details such as model number, serial number, capacity, and other specifications. This industrial machine nameplate is used to provide critical information for the equipment."
                            style={{ height: '350px' }}
                        />
                        <ProductCard
                        imgSrc={IMG9}
                        loading="lazy"
                        title={t('aluminium.title9')}
                        description="Displays essential machine details such as model number, serial number, capacity, and other specifications. This industrial machine nameplate is used to provide critical information for the equipment."
                        style={{ height: '350px' }}
                    />
                    <ProductCard
                    imgSrc={IMG10}
                    loading="lazy"
                    title={t('aluminium.title10')}
                    description="Displays essential machine details such as model number, serial number, capacity, and other specifications. This industrial machine nameplate is used to provide critical information for the equipment."
                    style={{ height: '350px' }}
                />
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
};

export default Aluminium;
