import React, { useState } from 'react';
import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Hamburger from '../assets/Hamburger.svg';
import closeHamburger from '../assets/closeHamburger.svg';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="relative py-4 bg-custom-green">
            <div className="flex justify-between items-center">
                <img src={AgriboostWhite} className="ml-5 inline-block" alt="AgriBoost Logo" />
                <button className="absolute top-0 right-0 mr-5 mt-4" onClick={toggleDropdown}>
                    <img src={Hamburger} className="inline-block" alt="Hamburger Menu" />
                </button>
            </div>

            {isOpen && ( // Kondisi isOpen ditambahkan di sini
                <div className="fixed top-0 right-0 w-[300px] h-screen bg-custom-green p-8 gap-16">
                    <button className="absolute top-2 right-2" onClick={toggleDropdown}>
                        <img src={closeHamburger} className="ml-5 inline-block"/>
                    </button>
                    <ul className="space-y-2 mt-6">
                        <li><a href="#" className="text-white">Donasi</a></li>
                        <li><a href="#" className="text-white">Komunitas</a></li>
                        <li><a href="#" className="text-white">Kuis</a></li>
                        <li><a href="#" className="text-white">Tentang Kami</a></li>
                    </ul>
                    <button className="bg-white text-custom-green text-base font-semibold py-3 px-6 rounded-[10px] mt-4 w-full">Daftar</button>
                </div>
            )}
        </nav>
    );
};

export default Header;
