import React, { useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import IMG1 from '../../images/products/Steel1.jpg';
import IMG2 from '../../images/products/Steel2.jpg';
import IMG3 from '../../images/products/Steel3.jpg';
import IMG4 from '../../images/products/Steel4.jpg';
import IMG5 from '../../images/products/Steel5.jpg';
import IMG6 from '../../images/products/Steel6.jpg';
import IMG7 from '../../images/products/Steel7.jpg';
import IMG8 from '../../images/products/Steel8.jpg';
import IMG9 from '../../images/products/Steel9.jpg';
import IMG10 from '../../images/products/Steel10.jpg';
import IMG11 from '../../images/products/Steel11.png';
import IMG12 from '../../images/products/Steel12.jpg';
import Footer from '../Footer';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const ProductCard = ({ imgSrc, title, description, style, linkTo }) => (
    
    <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
        <div className="m-2 text-sm text-justify flex flex-col items-center">
            <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4" style={{ width: '350px' }}>{title}</h4>
            <div className="text-md font-medium leading-5">
                <img
                    src={imgSrc}
                    alt="Product"
                    className="border-[3px] border-fuchsia-900 rounded-lg"
                    style={{ objectFit: 'contain', width: '350px', height: '200px', ...style }}
                />
            </div>
        </div>
    </div>
);

const Steel = () => {
    const { t } = useTranslation(); // Initialize the translation function

    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
   return(
     <>
        <NavBar />
        <div className="my-4 py-4" id="portfolio">
            <br /><br /><br />
            <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">{t('steel.heading')}</h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
            </div>
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ProductCard
                        imgSrc={IMG3}
                        loading="lazy"
                        title={t('steel.title1')}
                        description="Displays the official business hours and extended operating hours of the establishment in both English and the local language."
                        style={{ height: "350px" }}
                    />
                    <ProductCard
                        imgSrc={IMG9}
                        loading="lazy"
                        title={t('steel.title2')}
                        description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                        style={{ height: "350px" }}
                    />
                    <ProductCard
                        imgSrc={IMG1}
                        loading="lazy"
                        title={t('steel.title3')}
                        description="Displays key technical details for an electro-hydraulic thruster, including phases, voltage, model, stroke, capacity, and other specifications. Made from 304-grade steel, it ensures durability and precision"
                        style={{ height: "250px" }}
                    />
                    <ProductCard
                        imgSrc={IMG6}
                        loading="lazy"
                        title={t('steel.title4')}
                        description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                        style={{ height: "250px" }}
                    />
                      <ProductCard
                    imgSrc={IMG2}
                    loading="lazy"
                    title={t('steel.title5')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG4}
                    loading="lazy"
                    title={t('steel.title6')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG5}
                    loading="lazy"
                    title={t('steel.title7')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG7}
                    loading="lazy"
                    title={t('steel.title8')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG8}
                    loading="lazy"
                    title={t('steel.title9')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG10}
                    loading="lazy"
                    title={t('steel.title10')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG11}
                    loading="lazy"
                    title={t('steel.title11')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                                <ProductCard
                    imgSrc={IMG12}
                    loading="lazy"
                    title={t('steel.title12')}
                    description="Displays the number of years of service and token number, typically pinned to the shirt of conductors and drivers."
                />
                </div>
            </div>
        </div>
        <Footer />
    </>
);
};

export default Steel;
