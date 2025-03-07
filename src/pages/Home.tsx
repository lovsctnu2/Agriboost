
import Header from "../components/Header";
import Footer from "../components/Footer";
import LandingPage from '../assets/Landing page.svg';
import refund from '../assets/refund.svg';

const Home = () => {
    return (
        <div>
            <Header />
            <div className="flex justify-center p-14">
                {/* Landing page image */}
                <img src={LandingPage} className='w-[1200px] h-auto max-w-none' />
            </div>

            <div className="flex justify-center items-center">
                <h2 className="font-bold text-4xl text-black text-center">
                    <span className="text-custom-dark-green">Donate</span><span>,</span><br />
                    <span className="text-custom-green">Educate</span><span>,</span><br />
                    <span className="text-custom-yellow">Elevate</span><span>.</span>
                    <div className="flex justify-center items-center p-10">
                <h3 className="font-medium text-black text-center text-sm">
                    <span className="">Saatnya Beraksi!</span>
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
{/* page 2 */}
            <div className="flex justify-center py-8 bg-custom-light-green">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                    <h3 className="text-custom-superdark-green font-bold text-2xl text-center">
                        <span>Mengapa</span>
                        <span className="text-custom-green font-bold text-2xl"> AgriBoost? </span><br />
                    </h3>
                    
                    {/* Container setelah kalimat */}
                    <div className="mt-8 bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={refund} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            Akses <span className="text-custom-green">Modal Cepat,</span><br />
                            <span>Hasil Panen Maksimal</span></h4>
                        <p className="text-sm font-normal text-center text-custom-green ">Membantu petani mendapatkan pendanaan yang mudah dan cepat</p>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={refund} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            Akses <span className="text-custom-green">Modal Cepat,</span><br />
                            <span>Hasil Panen Maksimal</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Membantu petani mendapatkan pendanaan yang mudah dan cepat</h5>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={refund} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            Akses <span className="text-custom-green">Modal Cepat,</span><br />
                            <span>Hasil Panen Maksimal</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Membantu petani mendapatkan pendanaan yang mudah dan cepat</h5>
                    </div>
                    <div className=" bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-2 flex flex-col items-center">
                    <img src={refund} className='h-10' />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center">
                            Akses <span className="text-custom-green">Modal Cepat,</span><br />
                            <span>Hasil Panen Maksimal</span></h4>
                        <h5 className="text-sm font-normal text-center text-custom-green ">Membantu petani mendapatkan pendanaan yang mudah dan cepat</h5>
                    </div>
                </div>
            </div>

{/* page 3*/}
            <div className="flex justify-center py-8 bg-white">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                    <h3 className="text-custom-superdark-green font-bold text-xl text-center">
                        <span className="text-custom-green font-bold text-xl gap-[32px]">Temukan Kampanye</span><br />
                        <span className="">berdasarkan minat Anda</span><br />
                    </h3>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;