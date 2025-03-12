import React, { useState, useEffect } from 'react';

type CardSize = 'small' | 'medium' | 'large';

interface CampaignCardProps {
    imageUrl: string;
    title: string;
    trackerImage: string;
    isWide: boolean;
    size?: CardSize;
    campaignId: string; // Tambahkan campaignId
}

const sizeConfig = {
    small: { width: '320px', height: '110px' },
    medium: { width: '320px', height: '131px' },
    large: { width: '320px', height: '270px' },
};

const CampaignCard: React.FC<CampaignCardProps> = ({
    imageUrl,
    title,
    trackerImage,
    isWide,
    size,
    campaignId,
}) => {
    const [donations, setDonations] = useState(0);
    const [collectedAmount, setCollectedAmount] = useState(0);
    const width = '320px';
    const borderRadius = isWide ? 'rounded-3xl' : 'rounded-xl';
    let height = '';

    if (size && sizeConfig[size]) {
        height = sizeConfig[size].height;
    } else if (isWide) {
        height = '270px';
    }

    useEffect(() => {
        // Simulasi pengambilan data dari API (ganti dengan fetch() jika perlu)
        const fetchData = async () => {
            // Simulasi data dari API
            const simulatedData = {
                donations: Math.floor(Math.random() * 500),
                collectedAmount: Math.floor(Math.random() * 20000000),
            };

            setDonations(simulatedData.donations);
            setCollectedAmount(simulatedData.collectedAmount);
        };

        fetchData(); // Panggil fungsi fetchData saat komponen di-mount

        const intervalId = setInterval(fetchData, 10000); // Fetch data setiap 10 detik

        return () => clearInterval(intervalId); // Bersihkan interval saat komponen unmount
    }, [campaignId]);

    const cardClass = `
    bg-white font-semibold text-sm ${borderRadius} w-[${width}]
    ${height ? `h-[${height}]` : ''} border-[1px] leading-[130%]
    border-custom-real-dark-green ${isWide ? 'mb-5 gap-2' : 'flex flex-row my-[4px] mb-5 gap-2'}
`;

    const imageClass = `
        ${isWide ? 'w-[320px] h-[150px]' : 'w-[104px] h-[110px]'}
        ${!isWide ? 'w-[104px] h-[131px]' : ''}
    `;

    const contentClass = `${!isWide ? 'px-[4px] py-[4px]' : ''}`;

    const titleClass = `
        text-base font-semibold text-custom-real-dark-green
        ${isWide ? 'mx-[4px] mb-[4px] mt-[12px]' : ''}
          white-space: no-wrap;
    `;

    const donationsClass = `
        text-sm font-light ${isWide ? 'mx-[4px]' : 'mx-[4px] text-xs'}
    `;

    const collectedClass = `
        text-sm font-normal ${isWide ? 'mx-[4px] mb-[4px]' : ''}
    `;

    return (
        <div className={cardClass}>
            
            <img src={imageUrl} className={imageClass} />
            <div className={contentClass}>
                <h4 className={titleClass}>{title}</h4>
                <h5 className={donationsClass}>{donations} donasi</h5>
                <img src={trackerImage} className={`${isWide ? 'mx-[4px]' : ''}`} />
                <h6 className={collectedClass}>Rp{collectedAmount.toLocaleString()} terkumpul</h6>
                
            </div>
        </div>
    );
};

export default CampaignCard;