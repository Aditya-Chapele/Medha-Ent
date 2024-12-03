import React from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook


const NumberSection = () => {
  const { t } = useTranslation(); // Initialize the translation functionc

    return (
        <section className="w-full py-16 bg-gray-100 ">
            <div className=" bg-gray-900 opacity-20"></div>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    {/* <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-900">Let the Number Speak for Us</h3> */}
                    <h3 className="text-3xl md:text-4xl font-bold text-fuchsia-900">{t('numbers.title')}</h3>
                    <div className="w-20 h-1 bg-fuchsia-900 mx-auto my-4"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                   
                    {/* Second Counter */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-8">
                        <h4 className="text-2xl font-semibold mb-4">{t('numbers.text1')}</h4>
                        <div className="text-5xl font-extrabold text-fuchsia-900" data-to="10540" data-duration="2000">
                            1000+
                        </div>
                        <p className="mt-4 text-xl text-gray-600">{t('numbers.subText1')}</p>
                    </div>

                    <div className="text-center bg-gray-100 ">
                        <h4 className="text-2xl font-semibold mb-4"></h4>
                        <div className="text-5xl font-extrabold text-fuchsia-900" data-to="10540" data-duration="2000">
                            
                        </div>
                        <p className="mt-2 text-gray-600"></p>
                    </div>

                    {/* Third Counter */}
                    <div className="text-center bg-white shadow-lg rounded-lg p-8">
                        <h4 className="text-2xl font-semibold mb-4">{t('numbers.text2')}</h4>
                        <div className="text-5xl font-extrabold text-fuchsia-900" data-to="1.8" data-duration="2000">
                            5 M+
                        </div>
                        <p className="mt-2 text-gray-600">{t('numbers.subText2')}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NumberSection;
