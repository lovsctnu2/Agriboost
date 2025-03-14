interface AgriBoostSectionProps {
  refund: string; // Assuming these are image URLs or paths
  petanilogo: string;
  molekul: string;
  sustain: string;
}

const AgriBoostSection: React.FC<AgriBoostSectionProps> = ({
  refund,
  petanilogo,
  molekul,
  sustain,
}) => {
  return (
    <div className="flex justify-center py-8 bg-custom-light-green">
      <div className="flex flex-col items-center justify-center w-full max-w-4xl">
        <h3 className="text-custom-superdark-green font-bold text-2xl text-center">
          <span>Mengapa</span>
          <span className="text-custom-green font-bold text-2xl"> AgriBoost? </span>
          <br />
        </h3>

        {/* Container setelah kalimat */}
        <div className="mt-8 my-4 bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green gap-1 flex flex-col items-center">
          <img src={refund} className="h-10" alt="Refund Icon" />
          <h4 className="text-custom-superdark-green font-bold text-base text-center">
            Akses <span className="text-custom-green">Modal Cepat,</span>
            <br />
            <span>Hasil Panen Maksimal</span>
          </h4>
          <h5 className="text-sm font-normal text-center text-custom-green mb-2 ">
            Membantu petani mendapatkan pendanaan yang mudah dan cepat
          </h5>
        </div>

        <div className="bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-1 flex flex-col items-center">
          <img src={petanilogo} className="h-10" alt="Petani Logo" />
          <h4 className="text-custom-superdark-green font-bold text-base text-center">
            <span className="text-custom-green">Dukung Petani </span>
            <span>untuk </span>
            <br />
            <span>Kesejahteraan Bersama</span>
          </h4>
          <h5 className="text-sm font-normal text-center text-custom-green ">
            Meningkatkan kesadaran masyarakat atas kesejahteraan petani
          </h5>
        </div>

        <div className="bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green mb-4 gap-1 flex flex-col items-center">
          <img src={molekul} className="h-10" alt="Molekul Icon" />
          <h4 className="text-custom-superdark-green font-bold text-base text-center">
            <span className="text-custom-green">Teknologi Tepat</span>
            <span>,</span>
            <br />
            <span>Hasil Panen Meningkat</span>
          </h4>
          <h5 className="text-sm font-normal text-center text-custom-green ">
            Mengedukasi petani akan pentingnya penggunaan teknologi
          </h5>
        </div>

        <div className="bg-white font-semibold text-sm py-4 px-[20px] rounded-[20px] w-[320px] h-[162px] border-[3px] leading-[130%] border-custom-green gap-1 flex flex-col items-center">
          <img src={sustain} className="h-10" alt="Sustain Icon" />
          <h4 className="text-custom-superdark-green font-bold text-base text-center">
            <span className="text-custom-green">Panen Melimpah</span>
            <br />
            <span>Indonesia Sejahtera</span>
          </h4>
          <h5 className="text-sm font-normal text-center text-custom-green ">
            Meningkatkan hasil panen padi di Indonesia
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AgriBoostSection;