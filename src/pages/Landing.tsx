
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
import dropdown from '../assets/dropdown.svg';
import backgroundImg from '../assets/image.png'
import CampaignCard from "../components/CampaignCard";
import AgriBoostSection from "../components/AgriboostSection";
import Button from "../components/Button";
import orang from "../assets/orang.svg";
import hati from "../assets/hati.svg";
import kado from "../assets/kado.svg";
import chat from "../assets/chat.svg";
import dropbutton from "../assets/dropbutton.svg";
import arrow from "../assets/arrow.svg"
import arrowWhite from "../assets/arrowWhite.svg"



const Landing = () => {
    return (
        <div>
            <Header />
            <div className="justify-center pt-10 w-full lg:w-[1024px] lg:mx-auto">
                <img src={LandingPage} className='w-full lg:w-[600px] lg:h-[250px] mb-[32px] lg:mb-0 lg:mx-auto blockh-[197px]' />
                <div className="flex justify-center items-center">
                <h2 className="font-bold text-4xl text-black text-center lg:text-center lg: mt-5 gap-[32px]">
                    <span className="text-custom-dark-green">Donate</span><span>,</span><br />
                    <span className="text-custom-green">Educate</span><span>,</span><br />
                    <span className="text-custom-yellow">Elevate</span><span>.</span>
                <div className="flex justify-center items-center p-10">
                <h3 className="font-medium text-black text-center text-sm">
                    <span className="">Saatnya beraksi!</span>
                    <span className="text-custom-dark-green font-bold"> Donasi, </span><span className="text-custom-green font-bold"> Belajar, </span><span> dan </span><br />
                    <span className="text-custom-yellow font-bold">Bangun Ekosistem Pertanian </span><span>yang Lebih<br /> Baik bersama </span>
                    <span className="text-custom-green font-bold">AgriBoost.</span>
                </h3>
            </div>
                </h2>
                
            </div>
            <div>
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
  

<div>
      <AgriBoostSection
        refund={refund}
        petanilogo={petanilogo}
        molekul={molekul}
        sustain={sustain}
      />
    </div>



    <div className="flex flex-col justify-center px-5 bg-white my-8 ">
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
<div className="flex justify-center pt-8 px-5 relative w-[360px] lg:w-full lg:h-[700px]">
  <img
    src={backgroundImg}
    alt="Background"
    className="absolute inset-0 w-full h-full object-cover z-0"
  />
  <div className="flex flex-wrap items-center relative z-10 font-bold text-2xl text-center gap-[32px]">
    <h3 className="text-custom-superdark-green text-center w-full">
      <span className="text-custom-green">Fitur </span>
      <span> Kami</span><br />
    </h3>
    <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-8 lg:px-5 lg:py-8">
      <div className="bg-transparent font-semibold text-sm py-5 px-4 rounded-[20px] w-full lg:w-[450px] lg:h-auto border-[2px] leading-[130%] border-custom-green flex flex-col items-center">
        <img src={hati} className="h-[85px] mb-3" alt="Donasi" />
        <h4 className="text-custom-green font-bold text-xl text-center gap-2">Donasi</h4>
        <h5 className="text-sm font-normal text-center text-black">
          Bantu petani mendapatkan akses modal untuk modernisasi pertanian. 
          Setiap donasi yang Anda berikan akan mendukung inovasi dan kesejahteraan petani di Indonesia.
        </h5>
      </div>
      <div className="bg-transparent font-semibold text-sm py-5 px-4 rounded-[20px] w-full lg:w-[450px] lg:h-auto border-[2px] leading-[130%] border-custom-green flex flex-col items-center">
        <img src={orang} className="h-[85px] mb-3" alt="Komunitas" />
        <h4 className="text-custom-real-dark-green font-bold text-xl text-center gap-2">Komunitas</h4>
        <h5 className="text-sm font-normal text-center text-black">
          Terhubung dengan petani, ahli pertanian, dan innovator agritech! 
          Diskusikan solusi pertanian, bagikan pengalaman, dan dapatkan wawasan baru dari komunitas.
        </h5>
      </div>
      <div className="bg-transparent font-semibold text-sm py-5 px-4 rounded-[20px] w-full lg:w-[450px] lg:h-auto border-[2px] leading-[130%] border-custom-green flex flex-col items-center">
        <img src={chat} className="h-[85px] mb-3" alt="Kuis" />
        <h4 className="text-custom-mid-yellow font-bold text-xl text-center gap-2">Kuis</h4>
        <h5 className="text-sm font-normal text-center text-black">
          Belajar sambil bermain! Ikuti kuis interaktif seputar pertanian dan inovasi agritech. 
          Setiap jawaban benar memberi poin yang bisa ditukar dengan berbagai hadiah menarik!
        </h5>
      </div>
      <div className="bg-transparent font-semibold text-sm py-5 px-4 rounded-[20px] w-full lg:w-[450px] lg:h-auto border-[2px] leading-[130%] border-custom-green flex flex-col items-center">
        <img src={kado} className="h-[85px] mb-3" alt="Reward" />
        <h4 className="text-custom-light-yellow font-bold text-xl text-center gap-2">Reward</h4>
        <h5 className="text-sm font-normal text-center text-black">
          Setiap kontribusi dan aktivitas edukatif yang Anda lakukan akan mengumpulkan poin. 
          Tukarkan poin Anda dengan hadiah eksklusif!
        </h5>
      </div>
    </div>
  </div>
</div>

        <div className="bg-white flex justify-center pt-8 px-4 lg:px-[100px] lg:py-[56px] w-[360px] lg:w-full h-[496px] gap-8">
            <div className="flex flex-col items-center lg:w-[1240px]">
                <h3 className="text-custom-green font-bold text-xl text-center items-center lg: mb-4">
                    <span className="text-custom-real-dark-green font-bold text-xl">Soal </span>
                    <span> Sering Ditanya</span><br />
                    <div >
                    </div>
                </h3>
                <button className="flex flex-col mt-8 text-custom-yellow font-bold text-sm ml-auto mb-3 lg: hidden">
                    Selengkapnya
                    <img src={dropbutton} className="w-6 h-6" />
                </button>
                <div className="justify-center items-center lg:w-full">
                <div className=" py-3 px-3 rounded-xl lg:py-7 lg:px-8  bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex items-center justify-center gap-2 w-full h-[45px] mb-3 lg:h-[56px]">
                    Bagaimana cara saya berdonasi?
                    <img
                    src={dropdown} 
                    className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 lg:py-7 lg:px-8 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex items-center justify-center gap-2 w-full h-[66px] lg:h-[56px] mb-3 ">
                    Apa manfaat bergabung dengan Komunitas?
                    <img
                    src={dropdown}
                    className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 lg:py-7 lg:px-8 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex items-center justify-center gap-2 w-full h-[45px] lg:h-[56px] mb-3 ">
                    Apa itu fitur kuis di website ini?
                    <img
                    src={dropdown} 
                    className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                <div className=" py-3 px-3 lg:py-7 lg:px-8 rounded-xl bg-custom-light-green text-custom-real-dark-green text-sm font-semibold flex items-center justify-center gap-2 w-full h-[66px] lg:h-[56px] mb-8 ">
                    Apakah saya harus membuat akun untuk berdonasi?
                    <img
                    src={dropdown} 
                    className="w-4 h-4 flex justify-end ml-auto" 
                />
                </div>
                </div>
               <button className="bg-transparent flex py-3 px-6 relative w-[198px] h-[48px] border-2 border-custom-green rounded-[50px] ml-auto lg:hidden">
                <h4 className="text-sm font-medium text-custom-green">Kembali ke atas</h4>
                <img src={arrow}/>
            </button> 
        </div>
    </div>


            <Footer />
        </div>
    );
    
};

export default Landing;