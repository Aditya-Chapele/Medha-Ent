import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/Navbar/NavBar';
import IMG1 from '../../images/products/Brass1.jpg';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook

const ProductCard = ({ imgSrc, title, description, style }) => (
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
        <div className="m-2 text-sm text-justify flex flex-col items-center">
            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4" style={{ width: '350px' }}>{title}</h4>
            <div className="text-md font-medium leading-5">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="border-[3px] border-fuchsia-900 rounded-lg"
                    style={{ objectFit: 'contain', width: '350px', height: '200px', ...style }}
                />
            </div>
        </div>
    </div>
);

const Brass = () => {
    const { t } = useTranslation(); // Initialize the translation function

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <NavBar />
            <div className="my-4 py-4" id="portfolio">
                <br /><br /><br />
                <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">{t('brass.heading')}</h2>
                <div className="flex justify-center">
                    <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
                </div>
                <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        <ProductCard
                            imgSrc={IMG1}
                            title={t('brass.title')} // Dynamic title
                            // description={t('brass.products.identificationTag.description')} // Optional
                            style={{ height: '350px' }}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Brass;
