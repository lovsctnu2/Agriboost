
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
import CampaignCard from "../components/CampaignCard";
import AgriBoostSection from "../components/AgriboostSection";


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
<div>
      <AgriBoostSection
        refund={refund}
        petanilogo={petanilogo}
        molekul={molekul}
        sustain={sustain}
      />
    </div>

{/* page 3*/}

<div className="flex justify-center pt-8 px-5 bg-white mb-16">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl gap-[12]px">
                <h3 className="text-custom-superdark-green font-bold text-xl text-center">
                    <span className="text-custom-green font-bold text-xl gap-[32px]">Temukan Kampanye</span><br />
                    <span className="">berdasarkan minat Anda</span><br />
                </h3>

                <CampaignCard
                    imageUrl={petaniLebar}
                    title="Smart Farming untuk Sawah Berkelanjutan"
                    trackerImage={tracker1}
                    isWide={true}
                    size="large"
                    campaignId="campaign1"
                />

                <CampaignCard
                    imageUrl={tanaman}
                    title="Gerakan 1.000 Bibit Cabai Petani Lokal"
                    trackerImage={tracker}
                    isWide={false}
                    size="small"
                    campaignId="campaign2"
                />

                <CampaignCard
                    imageUrl={traktor}
                    title="Mekanisasi Panen Padi: Hemat Waktu, Tingkatkan Hasil"
                    trackerImage={tracker}
                    isWide={false}
                    size="medium"
                    campaignId="campaign3"
                />

                <CampaignCard
                    imageUrl={petani}
                    title="Pupuk Organik untuk Sawah Sehat dan Berkelanjutan"
                    trackerImage={tracker}
                    isWide={false}
                    size="medium"
                    campaignId="campaign4"
                />
            </div>
        </div>
            <Footer />
        </div>
    );
};

export default Home;