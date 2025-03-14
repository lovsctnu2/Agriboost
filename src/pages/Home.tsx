import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LandingPage from '../assets/Landing page.svg';

import petaniLebar from '../assets/petaniLebar.svg';
import petani from '../assets/petani.svg';
import tanaman from '../assets/tanaman.svg';
import traktor from '../assets/traktor.svg';
import tracker from '../assets/tracker.svg';
import tracker1 from '../assets/tracker1.svg';
import dropdown from '../assets/dropdown.svg';
import CampaignCard from "../components/CampaignCard";
import Button from "../components/Button";
import dropbutton from "../assets/dropbutton.svg";
import arrow from "../assets/arrow.svg"
import arrowWhite from "../assets/arrowWhite.svg"


const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="justify-center pt-14 w-[360px] h-[718px]">
            
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
            <div className="flex flex-col items-center gap-1 mb-36">
      <Button
        text="DONASI"
        bgClassName="bg-custom-green"
        textColorClass="text-white"
      />
      <Button
        text="KOMUNITAS"
        bgClassName="bg-white"
        textColorClass="text-custom-green"
        borderColorClass="border border-custom-dark-green"
      />
    </div>
            </div>
            </div>

{/* page 3*/}

<div className="flex flex-col justify-center px-5 bg-custom-light-green mt-8">
            <div className="flex flex-col items-center justify-center w-full h-[927px]">
                <h3 className="text-custom-superdark-green font-bold text-xl text-center mb-8">
                    <span className="text-custom-green font-bold text-xl">Temukan Kampanye</span><br />
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
            <button className="mt-3 flex flex-row w-[200px] h-[45px] rounded-lg px-5 py-3 gap-[10px] bg-custom-green ml-auto">
                <h3 className="text-white text-sm font-semibold">Eksplor Kampanye</h3>
                <img src={arrowWhite} className="w-4 h-4 flex items-center justify-center" />
            </button>
            </div>

            

            <div className="bg-white flex justify-center pt-8 px-5 relative w-[360px] h-[496px] gap-8">
            <div className="flex flex-col items-center relative z-10">
                <h3 className="text-custom-green font-bold text-xl text-center items-center">
                    <span className="text-custom-real-dark-green font-bold text-xlr ">Soal </span>
                    <span> Sering Ditanya</span><br />
                    <div className="absolute top-1/2 right-4 -translate-y-1/2">
                    </div>
                </h3>
                <button className="flex flex-row mt-8 text-custom-yellow font-bold text-sm ml-auto mb-3">
                    Selengkapnya
                    <img src={dropbutton} className="w-6 h-6" />
                </button>
                <div className="justify-between">
                <div className=" py-3 px-3 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex  gap-2 w-[320px] h-[45px] mb-3">
                Bagaimana cara saya berdonasi?
                <img
                src={dropdown} 
                className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex  gap-2 w-[320px] h-[66px] mb-3">
                Apa manfaat bergabung dengan Komunitas?
                <img
                src={dropdown}
                className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex  gap-2 w-[320px] h-[45px] mb-3">
                Apa itu fitur kuis di website ini?
                <img
                src={dropdown} 
                className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex  gap-2 w-[320px] h-[66px] mb-8">
                Apakah saya harus membuat akun untuk berdonasi?
                <img
                src={dropdown} 
                className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                </div>
               <button className="bg-transparent flex py-3 px-6 relative w-[198px] h-[48px] border-2 border-custom-green rounded-[50px] ml-auto ">
                <h4 className="text-sm font-medium text-custom-green">Kembali ke atas</h4>
                <img src={arrow}/>
            </button> 
        </div>
    </div>


            <Footer />
        </div>
    );
    
};

export default Home;