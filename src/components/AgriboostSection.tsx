import React from 'react';

interface AgriBoostSectionProps {
    refund: string;
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
        <div className="flex justify-center py-8 bg-custom-light-green lg:w-full lg:h-full">
            <div className="flex flex-col items-center justify-center w-full max-w-4xl">
                <h3 className="text-custom-superdark-green font-bold text-2xl text-center">
                    <span>Mengapa</span>
                    <span className="text-custom-green font-bold text-2xl"> AgriBoost? </span>
                    <br />
                </h3>

                <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8"> 
                    <div className="bg-white font-semibold text-sm py-6 px-6 rounded-[20px] w-full h-auto border-[3px] leading-[130%] border-custom-green flex flex-col items-center mb-4 lg:mb-0">
                        <img src={refund} className="h-10 mb-4" alt="Refund Icon" />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center mb-2">
                            Akses <span className="text-custom-green">Modal Cepat,</span>
                            <br />
                            <span>Hasil Panen Maksimal</span>
                        </h4>
                        <h5 className="text-sm font-normal text-center text-custom-green">
                            Membantu petani mendapatkan pendanaan yang mudah dan cepat
                        </h5>
                    </div>

                    <div className="bg-white font-semibold text-sm py-6 px-6 rounded-[20px] w-full h-auto border-[3px] leading-[130%] border-custom-green flex flex-col items-center mb-4 lg:mb-0">
                        <img src={petanilogo} className="h-10 mb-4" alt="Petani Logo" />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center mb-2">
                            <span className="text-custom-green">Dukung Petani </span>
                            <span>untuk </span>
                            <br />
                            <span>Kesejahteraan Bersama</span>
                        </h4>
                        <h5 className="text-sm font-normal text-center text-custom-green">
                            Meningkatkan kesadaran masyarakat atas kesejahteraan petani
                        </h5>
                    </div>

                    <div className="bg-white font-semibold text-sm py-6 px-6 rounded-[20px] w-full h-auto border-[3px] leading-[130%] border-custom-green flex flex-col items-center mb-4 lg:mb-0">
                        <img src={molekul} className="h-10 mb-4" alt="Molekul Icon" />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center mb-2">
                            <span className="text-custom-green">Teknologi Tepat</span>
                            <span>,</span>
                            <br />
                            <span>Hasil Panen Meningkat</span>
                        </h4>
                        <h5 className="text-sm font-normal text-center text-custom-green">
                            Mengedukasi petani akan pentingnya penggunaan teknologi
                        </h5>
                    </div>

                    <div className="bg-white font-semibold text-sm py-6 px-6 rounded-[20px] w-full h-auto border-[3px] leading-[130%] border-custom-green flex flex-col items-center">
                        <img src={sustain} className="h-10 mb-4" alt="Sustain Icon" />
                        <h4 className="text-custom-superdark-green font-bold text-base text-center mb-2">
                            <span className="text-custom-green">Panen Melimpah</span>
                            <br />
                            <span>Indonesia Sejahtera</span>
                        </h4>
                        <h5 className="text-sm font-normal text-center text-custom-green">
                            Meningkatkan hasil panen padi di Indonesia
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AgriBoostSection;