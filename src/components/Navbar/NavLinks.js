// import React from 'react';
// import { HashLink } from 'react-router-hash-link';
// import { useTranslation } from 'react-i18next';
// import { useLocation, useNavigate } from 'react-router-dom';


// const NavLinks = ({ closeMenu }) => {
    
//     const { i18n } = useTranslation();
//     const location = useLocation();
//     const navigate = useNavigate();
    

//     const handleLanguageChange = (event) => {
//         const language = event.target.value;
        
//         // Change language without redirecting to home page
//         i18n.changeLanguage(language);
        
//         // If current location is not the home page, stay on the current page
//         if (location.pathname !== '/') {
//             navigate(location.pathname + location.hash, { replace: true });
//         }
//     };

//     return (
//         <>
//             <HashLink
//                 className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
//                 smooth
//                 to="/#hero"
//                 onClick={closeMenu}
//             >
//                 {i18n.t('navlink.home')}
//             </HashLink>
//             <HashLink
//                 className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
//                 smooth
//                 to="/#about"
//                 onClick={closeMenu}
//             >
//                 {i18n.t('navlink.about')}
//             </HashLink>
//             <HashLink
//                 className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
//                 smooth
//                 to="/#portfolio"
//                 onClick={closeMenu}
//             >
//                 {i18n.t('navlink.products')}
//             </HashLink>
//             <HashLink
//                 className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
//                 to="/contact#contact"
//                 onClick={closeMenu}
//             >
//                 {i18n.t('navlink.contactUs')}
//             </HashLink>

//                 <select 
//                     value={i18n.language}
//                     onChange={handleLanguageChange}
//                     className="font-extrabold text-xl text-gray-500 hover:text-fuchsia-800"
                    
//                 >
//                     <option   value="en">English</option>
//                     <option   value="hn">हिंदी</option>
//                     <option   value="mr">मराठी</option>
//                     <option   value="gj">ગુજરાતી</option>
//                     <option   value="gn">Deutsch</option>
//                     <option   value="sp">Español</option>
//                     <option   value="fr">français</option>
//                     <option   value="ch">中国人</option>
//                 </select>
//         </>
//     );
// };

// export default NavLinks;

/////////////Corected the error on close menu in language

import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';

const NavLinks = ({ closeMenu }) => {
    const { i18n } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLanguageChange = (event) => {
        const language = event.target.value;

        // Change the language
        i18n.changeLanguage(language);

        // Close the menu
        if (closeMenu) closeMenu();

        // Stay on the current page if it's not the home page
        if (location.pathname !== '/') {
            navigate(location.pathname + location.hash, { replace: true });
        }
    };

    return (
        <>
            <HashLink
                className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
                smooth
                to="/#hero"
                onClick={closeMenu}
            >
                {i18n.t('navlink.home')}
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
                smooth
                to="/#about"
                onClick={closeMenu}
            >
                {i18n.t('navlink.about')}
            </HashLink>
            <HashLink
                className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
                smooth
                to="/#portfolio"
                onClick={closeMenu}
            >
                {i18n.t('navlink.products')}
            </HashLink>
            {/* Fixed Contact Us link */}
            <HashLink
                className="px-4 font-extrabold text-xl text-gray-500 hover:text-fuchsia-800 hover:underline"
                smooth
                to="/contact#contact"
                onClick={closeMenu}
            >
                {i18n.t('navlink.contactUs')}
            </HashLink>

            <select
                value={i18n.language}
                onChange={handleLanguageChange}
                className="font-extrabold text-xl text-gray-500 hover:text-fuchsia-800"
            >
                <option value="en">English</option>
                <option value="hn">हिंदी</option>
                <option value="mr">मराठी</option>
                <option value="gj">ગુજરાતી</option>
                <option value="gn">Deutsch</option>
                <option value="sp">Español</option>
                <option value="fr">français</option>
                <option value="ch">中国人</option>
            </select>
        </>
    );
};

export default NavLinks;
