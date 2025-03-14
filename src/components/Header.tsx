import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Hamburger from '../assets/Hamburger.svg';
import closeHamburger from '../assets/closeHamburger.svg';
import chevron from '../assets/chevron.svg';
import chevronUp from '../assets/chevronUp.svg';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDonasiOpen, setIsDonasiOpen] = useState<boolean>(false);
    const [isTentangKamiOpen, setIsTentangKamiOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsDonasiOpen(false);
        setIsTentangKamiOpen(false);
    };

    const toggleDonasiDropdown = () => {
        setIsDonasiOpen(!isDonasiOpen);
    };

    const toggleTentangKamiDropdown = () => {
        setIsTentangKamiOpen(!isTentangKamiOpen);
    };

    return (
        <nav className="relative py-4 bg-custom-green">
            <div className="flex justify-between items-center px-4 lg:px-16 lg:[100px]">
                <img src={AgriboostWhite} className="inline-block" alt="AgriBoost Logo" />
                <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
                    <div className="relative">
                        <button onClick={toggleDonasiDropdown} className="text-white flex items-center">
                            Donasi
                            {isDonasiOpen ? <img src={chevronUp} className="h-5 w-5 ml-1" alt="chevron up" /> : <img src={chevron} className="h-5 w-5 ml-1" alt="chevron" />}
                        </button>
                        {isDonasiOpen && (
                            <ul className="absolute bg-custom-green mt-2 py-2 rounded shadow-lg">
                                <li><Link to="/explore-campaign" className="block px-4 py-2 text-white hover:bg-custom-dark-green">Eksplor Kampanye</Link></li>
                                <li><Link to="/create-campaign" className="block px-4 py-2 text-white hover:bg-custom-dark-green">Buat Kampanye</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link to="/community" className="text-white">Komunitas</Link>
                    <Link to="/Kuis" className="text-white">Kuis</Link>
                    <div className="relative">
                        <button onClick={toggleTentangKamiDropdown} className="text-white flex items-center">
                            Tentang Kami
                            {isTentangKamiOpen ? <img src={chevronUp} className="h-5 w-5 ml-1" alt="chevron up" /> : <img src={chevron} className="h-5 w-5 ml-1" alt="chevron" />}
                        </button>
                        {isTentangKamiOpen && (
                            <ul className="absolute bg-custom-green mt-2 py-2 rounded shadow-lg">
                                <li><Link to="/why-agriboost" className="block px-4 py-2 text-white hover:bg-custom-dark-green">Mengapa AgriBoost?</Link></li>
                                <li><Link to="/features" className="block px-4 py-2 text-white hover:bg-custom-dark-green">Fitur Kami</Link></li>
                                <li><Link to="/faq" className="block px-4 py-2 text-white hover:bg-custom-dark-green">Soal Sering Ditanya</Link></li>
                            </ul>
                        )}
                    </div>
                    <Link to="/login" className="bg-white text-custom-green text-base font-semibold py-3 px-6 rounded-[10px]">Masuk</Link>
                </div>
                <button className="md:hidden" onClick={toggleDropdown}>
                    <img src={Hamburger} className="inline-block" alt="Hamburger Menu" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-[300px] h-screen bg-custom-green p-8 gap-16">
                    <button className="absolute top-2 right-2" onClick={toggleDropdown}>
                        <img src={closeHamburger} className="ml-5 inline-block" alt="close hamburger" />
                    </button>
                    <ul className="space-y-2 mt-6">
                        <li className="relative">
                            <button onClick={toggleDonasiDropdown} className="text-white w-full text-left flex items-center justify-between">
                                Donasi
                                {isDonasiOpen ? <img src={chevronUp} className="h-5 w-5" alt="chevron up" /> : <img src={chevron} className="h-5 w-5" alt="chevron" />}
                            </button>
                            {isDonasiOpen && (
                                <ul className="mt-2">
                                    <li><Link to="/explore-campaign" className="block px-4 py-2 text-white">Eksplor Kampanye</Link></li>
                                    <li><Link to="/create-campaign" className="block px-4 py-2 text-white">Buat Kampanye</Link></li>
                                </ul>
                            )}
                        </li>
                        <li><Link to="/community" className="text-white">Komunitas</Link></li>
                        <li><Link to="/Kuis" className="text-white">Kuis</Link></li>
                        <li className="relative">
                            <button onClick={toggleTentangKamiDropdown} className="text-white w-full text-left flex items-center justify-between">
                                Tentang Kami
                                {isTentangKamiOpen ? <img src={chevronUp} className="h-5 w-5" alt="chevron up" /> : <img src={chevron} className="h-5 w-5" alt="chevron" />}
                            </button>
                            {isTentangKamiOpen && (
                                <ul className="mt-2">
                                    <li><Link to="/why-agriboost" className="block px-4 py-2 text-white">Mengapa AgriBoost?</Link></li>
                                    <li><Link to="/features" className="block px-4 py-2 text-white">Fitur Kami</Link></li>
                                    <li><Link to="/faq" className="block px-4 py-2 text-white">Soal Sering Ditanya</Link></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <Link to="/" className="bg-white text-custom-green text-base font-semibold py-3 px-6 rounded-[10px] mt-4 w-full">Daftar</Link>
                </div>
            )}
        </nav>
    );
};

export default Header;