import { useState } from 'react';
import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Chevron from '../assets/chevron.svg';
import ChevronUp from '../assets/chevronUp.svg';
import Profile from '../assets/ellips.svg';
import Hamburger from '../assets/Hamburger.svg';
import closeHamburger from '../assets/closeHamburger.svg';

const Navbar = () => {
    const [isDonasiOpen, setIsDonasiOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleDonasiDropdown = () => {
        setIsDonasiOpen(!isDonasiOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="relative py-4 lg:px-[100px] bg-custom-green ">
            <div className="container mx-auto flex justify-between items-center px-4">
                <img src={AgriboostWhite} className="inline-block" alt="AgriBoost Logo" />

                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white">
                        {isMenuOpen ? (
                            <img src={closeHamburger} alt="Close Menu" className="h-6 w-6" />
                        ) : (
                            <img src={Hamburger} alt="Open Menu" className="h-6 w-6" />
                        )}
                    </button>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    <a className="text-white">Donasi</a>
                    <a className="text-white">Komunitas</a>
                    <a className="text-white">Kuis</a>
                    <div className="relative">
                        <button onClick={toggleDonasiDropdown} className="text-white flex items-center">
                            Tentang Kami
                            {isDonasiOpen ? <img src={ChevronUp} className="h-5 w-5 ml-1" alt="Chevron Up" /> : <img src={Chevron} className="h-5 w-5 ml-1" alt="Chevron Down" />}
                        </button>
                        {isDonasiOpen && (
                            <div className="absolute left-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden">
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Eksplor Kampanye</a>
                                <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Buat Kampanye</a>
                            </div>
                        )}
                    </div>
                </div>

                <div className="hidden md:flex items-center">
                    <img src={Profile} alt="Profile" />
                    <div className="mr-4">
                        <p className="text-white font-semibold">Rosa Diggory</p>
                        <p className="text-white text-sm">Donatur Pemula</p>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <aside className="fixed top-0 right-0 h-full w-64 bg-custom-green p-4 z-50 transition-transform duration-300 transform translate-x-0">
                    <div className="flex justify-end mb-4">
                        <button onClick={toggleMenu} className="text-white">
                            <img src={closeHamburger} alt="Close Menu" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="flex flex-col items-start">
                        <a className="text-white mb-2">Beranda</a>
                        <div className="relative w-full">
                            <button onClick={toggleDonasiDropdown} className="text-white flex items-center justify-between w-full mb-2">
                                Donasi
                                {isDonasiOpen ? <img src={ChevronUp} className="h-5 w-5" alt="Chevron Up" /> : <img src={Chevron} className="h-5 w-5" alt="Chevron Down" />}
                            </button>
                            {isDonasiOpen && (
                                <div className="ml-4">
                                    <a className="block px-4 py-2 text-white hover:bg-gray-700">Eksplor Kampanye</a>
                                    <a className="block px-4 py-2 text-white hover:bg-gray-700">Buat Kampanye</a>
                                </div>
                            )}
                        </div>
                        <a className="text-white mb-2">Komunitas</a>
                        <a className="text-white mb-2">Kuis</a>
                        <a className="text-white mb-2">Dashboard</a>
                    </div>
                    <div className="mt-4 flex items-center">
                        <img src={Profile} />
                        <div>
                            <p className="text-white font-semibold">Rosa Diggory</p>
                            <p className="text-white text-sm">Donatur Pemula</p>
                        </div>
                    </div>
                </aside>
            )}
        </nav>
    );
};

export default Navbar;