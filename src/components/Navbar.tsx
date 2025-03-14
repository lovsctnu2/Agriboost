import { useState } from 'react';
import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Hamburger from '../assets/Hamburger.svg';
import closeHamburger from '../assets/closeHamburger.svg';
import chevron from '../assets/chevron.svg';
import chevronUp from '../assets/chevronUp.svg';
import profile from '../assets/Profile.svg'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDonasiOpen, setIsDonasiOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
        setIsDonasiOpen(false);
    };

    const toggleDonasiDropdown = () => {
        setIsDonasiOpen(!isDonasiOpen);
    };

    return (
        <nav className="relative py-4 bg-custom-green">
            <div className="flex justify-between items-center">
                <img src={AgriboostWhite} className="ml-5 inline-block" alt="AgriBoost Logo" />
                <button className="absolute top-0 right-0 mr-5 mt-4" onClick={toggleDropdown}>
                    <img src={Hamburger} className="inline-block" alt="Hamburger Menu" />
                </button>
            </div>

            {isOpen && (
                <div className="fixed top-0 right-0 w-[300px] h-screen bg-custom-green p-8 gap-16">
                    <button className="absolute top-2 right-2" onClick={toggleDropdown}>
                        <img src={closeHamburger} className="ml-5 inline-block" />
                    </button>

                    {/* Profil Pengguna */}
                    <div className="flex items-center mb-6">
                        <img src={profile} alt="User Profile" className="w-12 h-12 rounded-full mr-3" />
                        <div>
                            <p className="text-white font-semibold">Rosa Diggory</p>
                            <p className="text-white text-sm">Donatur Pemula</p>
                        </div>
                    </div>

                    <ul className="space-y-2">
                        <li><a href="#" className="text-white">Beranda</a></li>
                        <li className="relative">
                        <button onClick={toggleDonasiDropdown} className="text-white w-full text-left flex items-center justify-between">
                                Donasi
                                {isDonasiOpen ? <img src={chevronUp} className="h-5 w-5" /> : <img src={chevron} className="h-5 w-5"/>}
                            </button>
                            {isDonasiOpen && (
                                <ul className="mt-2">
                                    <li><a href="#" className="block px-4 py-2 text-white">Eksplor Kampanye</a></li>
                                    <li><a href="#" className="block px-4 py-2 text-white">Buat Kampanye</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#" className="text-white">Komunitas</a></li>
                        <li><a href="#" className="text-white">Kuis</a></li>
                        <li><a href="#" className="text-white">Dashboard</a></li>
                        
                    </ul>
                    <button className="bg-white text-custom-green text-base font-semibold py-3 px-6 rounded-[10px] mt-4 w-full">Daftar</button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;