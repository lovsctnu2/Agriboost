
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from '../assets/Landing page.svg';

import refund from '../assets/refund.svg';
import petanilogo from '../assets/game-icons_farmer.svg';
import molekul from '../assets/carbon_sustainability.svg';
import sustain from '../assets/hugeicons_nano-technology.svg';

import petaniLebar from '../assets/petaniLebar.svg';
import petani from '../assets/petani.svg';
import tanaman from '../assets/tanaman.svg';
import traktor from '../assets/traktor.svg';
import tracker from '../assets/tracker.svg';
import tracker1 from '../assets/tracker1.svg';


const Home = () => {
    return (
        <div>
            <Header />
            <div className="justify-center pt-14 w-[360px] h-[718px]">
                {/* Landing page image */}
                <img src={LandingPage} className='w-[360px] h-[197px] mb-[32px]' />
                <div className="flex justify-center items-center">
                <h2 className="font-bold text-4xl text-black text-center gap-[32px]">
                    <span className="text-custom-dark-green">Donate</span><span>,</span><br />
                    <span className="text-custom-green">Educate</span><span>,</span><br />
                    <span className="text-custom-yellow">Elevate</span><span>.</span>
                <div className="flex justify-center items-center p-10">
                <h3 className="font-medium text-black text-center text-sm ">
                    <span className="">Saatnya beraksi!</span>
                    <span className="text-custom-dark-green font-bold"> Donasi, </span><span className="text-custom-green font-bold"> Belajar, </span><span> dan </span><br />
                    <span className="text-custom-yellow font-bold">Bangun Ekosistem Pertanian </span><span>yang Lebih<br /> Baik bersama </span>
                    <span className="text-custom-green font-bold">AgriBoost.</span>
                </h3>
            </div>
                </h2>
                
            </div>
            <div className="flex flex-col items-center gap-1 mb-36">
                {/* Tombol Donasi */}
                <button className="bg-custom-green text-white font-semibold text-sm py-3 px-8 rounded-lg w-64">
                    DONASI
                </button>

            {/* Tombol Komunitas */}
                <button className="bg-white text-custom-green font-semibold text-sm py-3 px-8 rounded-lg w-64 border-2 border-custom-green">
                    KOMUNITAS
                </button>
            </div>
            </div>

            

            
{/* page 2 */}
            <div className="flex justify-center py-8 bg-custom-light-green">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                    <h3 className="text-custom-superdark-green font-bold text-2xl text-center">
                        <span>Mengapa</span>
                        <span className="text-custom-green font-bold text-2xl"> AgriBoost? </span><br />
                    </h3>
                    
                    {/* Container setelah kalimat */}
                    <div className="my-8 bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={refund} className='h-10' />
                            <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            Akses <span className="text-custom-green">Modal Cepat,</span><br />
                            <span>Hasil Panen Maksimal</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Membantu petani mendapatkan pendanaan yang mudah dan cepat</h5>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={petanilogo} className='h-10' />
                            <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            <span className="text-custom-green">Dukung Petani </span><span>untuk </span><br />
                            <span>Kesejahteraan Bersama</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Meningkatkan kesadaran masyarakat atas kesejahteraan petani</h5>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={molekul} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            <span className="text-custom-green">Teknologi Tepat</span><span>,</span><br />
                            <span>Hasil Panen Meningkat</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Mengedukasi petani akan pentingnya penggunaan teknologi</h5>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={sustain} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            <span className="text-custom-green">Panen Melimpah</span><br />
                            <span>Indonesia Sejahtera</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Meningkatkan hasil panen padi di Indonesia</h5>
                    </div>
                </div>
            </div>

{/* page 3*/}
            <div className="flex justify-center py-8 bg-white">
                <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-[12]px">
                    <h3 className="text-custom-superdark-green font-bold text-xl text-center">
                        <span className="text-custom-green font-bold text-xl gap-[32px]">Temukan Kampanye</span><br />
                        <span className="">berdasarkan minat Anda</span><br />
                    </h3>

                    <div className="mt-8 bg-white font-semibold text-sm rounded-[20px] w-[320px] h-[270px] border-[1px] leading-[130%] border-custom-real-dark-green mb-5 gap-2">
                        <img src={petaniLebar} className='w-[320px] h-[150px]' />
                        <h4 className="mx-[4px] mb-[4px] mt-[12px] text-base font-semibold text-custom-real-dark-green">Smart Farming untuk Sawah <br />Berkelanjutan</h4>
                        <h5 className="mx-[4px] text-sm font-light ">423 Donasi</h5>
                        <img src={tracker1} className='mx-[4px]' />
                        <h6 className="mx-[4px] mb-[4px] text-base font-normal">Rp11.278.500 terkumpul</h6>
                    </div>

                    <div className="flex flex-row my-[4px] bg-white font-semibold text-sm rounded-[10px] w-[320px] h-[110px] border-[1px] leading-[130%] border-custom-real-dark-green px-0 mb-5 gap-2">
                    <img src={tanaman} className='w-[104px] h-[110px]' />
                    <div className="px-[4px] py-[4px]">
                    <h4 className="text-base font-semibold text-custom-real-dark-green">Gerakan 1.000 Bibit <span className="whitespace-nowrap">Cabai untuk Petani Lokal</span></h4>
                        <h5 className="mx-[4px] text-xs font-light ">74 donasi</h5>
                        <img src={tracker} className='' />
                        <h6 className="text-sm font-normal">Rp1.340.756 terkumpul</h6>
                    </div>

                    </div>
                    <div className="flex flex-row my-[4px] bg-white font-semibold text-sm rounded-[10px] w-[320px] h-[131px] border-[1px] leading-[130%]  border-custom-real-dark-green mb-5 gap-2">
                    <img src={traktor} className='w-[104px] h-[131px]' />
                    <div className="px-[4px] py-[4px]">
                    <h4 className=" text-base font-semibold text-custom-real-dark-green">Mekanisasi Panen Padi: Hemat Waktu, Tingkatkan Hasil</h4>
                        <h5 className="text-xs font-light ">187 donasi</h5>
                        <img src={tracker} className='' />
                        <h6 className="text-sm font-normal">Rp12.398.440 terkumpul</h6>
                    </div>

                    </div>
                    <div className="flex flex-row my-[4px] bg-white font-semibold text-sm rounded-[10px] w-[320px] h-[131px] border-[1px] leading-[130%] border-custom-real-dark-green mb-5 gap-2">
                    <img src={petani} className='w-[104px] h-[131px]' />
                    <div className="px-[4px] py-[4px]">
                    <h4 className=" text-base font-semibold text-custom-real-dark-green">Pupuk Organik untuk Sawah Sehat dan Berkelanjutan</h4>
                        <h5 className="text-xs font-light ">256 donasi</h5>
                        <img src={tracker} className='' />
                        <h6 className="text-sm font-normal">Rp8.333.120 terkumpul</h6>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;