import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Aluminium from '../images/products/AluminiumLogo.jpg';
import Steel from '../images/products/SteelLogo.png';
import Brass from '../images/products/BrassLogo.jpg';
import Copper from '../images/products/CopperLogo.jpg';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

// ProductCard Component
const ProductCard = ({ imgSrc, title, linkTo, t }) => {
    const imgRef = useRef(null);
    const [buttonWidth, setButtonWidth] = useState(0);

    // Update button width to match the image width
    useEffect(() => {
        const updateWidth = () => {
            if (imgRef.current) {
                setButtonWidth(imgRef.current.offsetWidth); // Match button width to image width
            }
        };

        updateWidth(); // Initial calculation
        window.addEventListener('resize', updateWidth); // Recalculate on resize
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return (
        <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max flex flex-col items-center">
            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4">{title}</h4>
            <img
                ref={imgRef}
                src={imgSrc}
                alt="Product"
                className="border-[3px] border-fuchsia-900 rounded-lg"
                style={{
                    objectFit: 'contain',
                    width: '350px',
                    height: '200px',
                }}
            />
            <Link
                to={linkTo}
                className="text-white bg-fuchsia-900 hover:bg-fuchsia-700 inline-flex items-center justify-center py-3 my-4 text-lg shadow-xl rounded-xl"
                style={{
                    width: `${buttonWidth}px`, // Match button width to image width
                }}
            >
                {t('portfolio.viewmore')}
                <svg
                    className="w-4 h-4 ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </Link>
        </div>
    );
};

// Portfolio Component
const Portfolio = () => {
    const { t } = useTranslation(); // Initialize useTranslation here

    return (
        <div className="my-4 py-4" id="portfolio">
            <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">
                {t('portfolio.heading')}
            </h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
            </div>
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ProductCard imgSrc={Steel} title={t('portfolio.productCards1')} linkTo="/steel" t={t} />
                    <ProductCard imgSrc={Aluminium} title={t('portfolio.productCards2')} linkTo="/aluminium" t={t} />
                    <ProductCard imgSrc={Brass} title={t('portfolio.productCards3')} linkTo="/brass" t={t} />
                    <ProductCard imgSrc={Copper} title={t('portfolio.productCards4')} linkTo="/copper" t={t} />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
