import React, { useState, useEffect } from 'react';
import NavLinks from '../Navbar/NavLinks';
import { HashLink } from 'react-router-hash-link';
import appIcon from '../../images/clients/Logo_no_background.png';

const NavBar = () => {
    const [top, setTop] = useState(!window.scrollY);
    const [isOpen, setisOpen] = useState(false);

    const handleClick = () => setisOpen(!isOpen);

    const closeMenu = () => {
        setisOpen(false); // Close the menu
    };

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 10);
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 w-full z-30 transition duration-300 ease-in-out ${
                    !top && 'bg-white shadow-lg'
                }`}
            >
                <div className="flex flex-row justify-between items-center py-2">
                    {/* Logo */}
                    <div className="flex flex-row justify-center items-center text-center font-semibold">
                        <HashLink smooth to="/#hero" onClick={closeMenu}>
                            <h1 className="font-extrabold text-4xl text-fuchsia-800">
                                <img
                                    src={appIcon}
                                    alt="App Icon"
                                    className="inline-block w-8 h-8 mr-2"
                                    style={{ width: '60px', height: '80px' }}
                                />
                            </h1>
                        </HashLink>
                        <HashLink smooth to="/#hero" onClick={closeMenu}>
                            <h1 className="font-extrabold text-4xl text-fuchsia-700">Medha Enterprises</h1>
                        </HashLink>
                    </div>

                    {/* Hamburger Button */}
                    <div className="group flex flex-col items-center">
                        <button
                            className="p-2 rounded-lg lg:hidden text-fuchsia-800"
                            onClick={handleClick}
                        >
                            <svg
                                className="h-6 w-6 fill-current"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                {isOpen ? (
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                    />
                                ) : (
                                    <path
                                        fillRule="evenodd"
                                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                                    />
                                )}
                            </svg>
                        </button>

                        {/* Desktop Menu */}
                        <div className="hidden space-x-6 lg:inline-block p-5">
                            <NavLinks closeMenu={closeMenu} />
                        </div>

                        {/* Mobile Dropdown Menu */}
                        <div
                            className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-24 bg-white lg:hidden shadow-xl top-14 ${
                                isOpen ? 'block' : 'hidden'
                            }`}
                        >
                            <div className="flex flex-col space-y-6">
                                <NavLinks closeMenu={closeMenu} />
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default NavBar;
