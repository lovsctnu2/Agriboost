import React from 'react';

type CardSize = 'small' | 'medium' | 'large';

interface CampaignCardProps {
  imageUrl: string;
  title: string;
  trackerImage: string;
  isWide: boolean;
  size?: CardSize;
  campaignId: string;
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
}) => {
  const width = '320px';
  const borderRadius = isWide ? 'rounded-3xl' : 'rounded-xl';
  let height = '';

  if (size && sizeConfig[size]) {
    height = sizeConfig[size].height;
  } else if (isWide) {
    height = '270px';
  }

  // Static values for donations and collected amount
  const donations = 123;
  const collectedAmount = 15000000;

  const cardClass = `
    bg-white font-semibold text-sm ${borderRadius} w-[${width}]
    ${height ? `h-[${height}]` : ''} border-[1px] leading-[130%]
    border-custom-real-dark-green ${isWide ? 'flex flex-col mb-5 gap-2' : 'flex flex-row my-[4px] mb-5 gap-2'}
  `;

  const imageClass = `
    ${isWide ? 'w-[320px] h-[150px]' : 'w-[104px] h-[110px]'}
    ${!isWide ? 'w-[104px] h-[131px]' : ''}
  `;

  const contentClass = `${!isWide ? 'px-[4px] py-[4px]' : 'flex flex-col justify-between p-4'}`;

  const titleClass = `
    text-base font-semibold text-custom-real-dark-green
    ${isWide ? 'mb-[4px]' : ''}
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

  const donationsClass = `
    text-sm font-light ${isWide ? '' : 'text-xs'}
  `;

  const collectedClass = `
    text-sm font-normal
  `;

  return (
    <div className="flex justify-center">
      <div className={cardClass}>
        <img src={imageUrl} className={imageClass} alt={title} />
        <div className={contentClass}>
          <h4 className={titleClass}>{title}</h4>
          <div>
            <h5 className={donationsClass}>{donations} donasi</h5>
            <img src={trackerImage} alt="Tracker" className={isWide ? 'mb-2' : ''} />
            <h6 className={collectedClass}>Rp{collectedAmount.toLocaleString()} terkumpul</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;