import React from 'react';

interface CustomButtonProps {
  text: string;
  bgClassName: string;
  textColorClass?: string; 
  borderColorClass?: string; 
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  bgClassName,
  textColorClass,
  borderColorClass,
}) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: bgClassName,
    color: textColorClass,
    border: borderColorClass ? `2px solid ${borderColorClass}` : 'none',
  };

  return (
    <button
      className={`font-semibold text-sm py-3 px-8 rounded-lg w-64 ${bgClassName} ${textColorClass} ${borderColorClass}`}
      style={buttonStyle}
    >
      {text}
    </button>
  );
};

export default CustomButton;