import React, {useState} from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

    let [isMenuOpen, setMenuOpen] = useState(false);

    let toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return(
        <>
            <nav className=" ">
                <div className="container flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">
              Uprajay Danny
            </span>
                    </Link>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-default"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                    <div
                        className={`${
                            isMenuOpen ? 'block' : 'hidden'
                        } w-full md:block md:w-auto`}
                        id="navbar-default"
                    >
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                            <li>
                                <a href="#presentation"
                                    className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Présentation
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#projet"
                                    className="block py-2 px-3  text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Projets
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact"
                                    className="block py-2 px-3 text-center rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline md:p-0  dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                                >
                                    Me contacter
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );

};

export default Nav;