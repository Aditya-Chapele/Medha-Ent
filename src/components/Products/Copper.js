
// import React , {useEffect} from 'react';
// import { Link } from 'react-router-dom';
// import NavBar from '../../components/Navbar/NavBar';
// import IMG1 from '../../images/products/Copper1.png';
// import IMG2 from '../../images/products/Copper2.jpg';
// import IMG3 from '../../images/products/Copper3.jpg';
// import IMG4 from '../../images/products/Copper4.png';
// import Footer from '../Footer';

// const ProductCard = ({ imgSrc, title, description, style, linkTo }) => (
//     <div className="bg-white transition-all ease-in-out duration-400 overflow-hidden text-gray-700 hover:scale-105 rounded-lg shadow-2xl p-3 min-h-max">
//         <div className="m-2 text-sm text-justify">
//             <h4 className="font-semibold my-4 text-lg md:text-2xl text-center mb-4 h-12">{title}</h4>
//             <div className="text-md font-medium leading-5">
//                 <img src={imgSrc} alt="Product" className="border-[3px] border-fuchsia-900 rounded-lg w-full h-full" style={{ objectFit: 'contain', width: '350px', height: '200px', ...style }} />
//             </div>
//             {/* <div className="my-4 text-center text-gray-600">
//                 {description}
//             </div> */}
//         </div>
//     </div>
// );

// const Copper = () => (
//     useEffect(() => {
//         window.scrollTo(0, 0); // Scroll to the top of the page when this component is rendered
//     }, []),
//     <>
//      <div>
//                     <NavBar />
//                 </div>
//     <div className="my-4 py-4" id="portfolio">
//         <br /><br /><br />                       
//         <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">Copper Products (Yantras)</h2>
//         <div className="flex justify-center">
//             <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
//         </div>
//         <div className="px-4" data-aos="fade-down" data-aos-delay="600">
//             <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
//                 <ProductCard
//                     imgSrc={IMG1}
//                     loading="lazy"
//                     title="Copper Yantras"
//                     description="Explore high-quality copper products for various industrial applications."
//                     // style={{height:'350px'}}
//                 />
//                 <ProductCard
//                     imgSrc={IMG2}
//                     loading="lazy"
//                     title="Copper Yantras"
//                     description="Durable and corrosion-resistant brass products for your needs."
//                 />
//                 <ProductCard
//                     imgSrc={IMG3}
//                     loading="lazy"
//                     title="Copper Yantras"
//                     description="Discover premium steel products tailored for construction and manufacturing."
//                 />
//                 <ProductCard
//                     imgSrc={IMG4}
//                     loading="lazy"
//                     title="Copper Yantras"
//                     description="High conductivity copper products for electrical and industrial purposes."
//                 />
//             </div>
//         </div>
//     </div>
//     <div>
//         <Footer />
//     </div>
//     </>
// );

// export default Copper;

import React, { useEffect } from 'react';
import NavBar from '../../components/Navbar/NavBar';
import IMG1 from '../../images/products/Copper1.png';
import IMG2 from '../../images/products/Copper2.jpg';
import IMG3 from '../../images/products/Copper3.jpg';
import IMG4 from '../../images/products/Copper4.png';
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

const Copper = () => {
    const { t } = useTranslation(); // Initialize the translation function

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <>
        <NavBar />
        <div className="my-4 py-4" id="portfolio">
            <br /><br /><br />
            <h2 className="my-2 text-center text-3xl text-fuchsia-900 uppercase font-bold">{t('copper.heading')}</h2>
            <div className="flex justify-center">
                <div className="w-24 border-b-4 border-fuchsia-900 mb-8"></div>
            </div>
            <div className="px-4" data-aos="fade-down" data-aos-delay="600">
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <ProductCard
                        imgSrc={IMG1}
                        loading="lazy"
                        title={t('copper.title')}
                        description="Explore high-quality copper products for various industrial applications."
                    />
                    <ProductCard
                        imgSrc={IMG2}
                        loading="lazy"
                        title={t('copper.title')}
                        description="Durable and corrosion-resistant brass products for your needs."
                    />
                    <ProductCard
                        imgSrc={IMG3}
                        loading="lazy"
                        title={t('copper.title')}
                        description="Discover premium steel products tailored for construction and manufacturing."
                    />
                    <ProductCard
                        imgSrc={IMG4}
                        loading="lazy"
                        title={t('copper.title')}
                        description="High conductivity copper products for electrical and industrial purposes."
                    />
                </div>
            </div>
        </div>
        <Footer />
    </>
);
};

export default Copper;
