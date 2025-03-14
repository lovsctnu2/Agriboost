import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Kuis = () => {
    return (
        <div className=''>
            <Navbar/>
            <div className="flex flex-col  py-8 px-5 bg-white w-[360px] h-[672px] ">
                <h1 className="text-lg font-bold flex justify-center items-start">Coba <span className="text-custom-green"> Kuis </span> Yuk!</h1>
                <div>
            <div className=" flex flex-row justify-center items-center bg-white w-[320px] h-[90px] rounded-[15px] shadow-lg">
               
                    <div className="px-3">
                    <h2 className="text-black text-base font-semibold ">Poin Kuis Saya</h2>
                    <h3 className="text-custom-yellow text-xs font-bold ">700 poin lagi</h3>
                    <h4 className="text-custom-yellow text-[10px] font-normal ">untuk klaim reward pertamamu</h4>
                    </div>
            </div>
            <div className="w-[320px] h-[49px] bg-custom">

            </div>
        
            </div>
            </div>
            
            
            <Footer/>
        </div>
        
      );
    };
  
  export default Kuis;
  