import React from 'react';
import open from '../assets/openEyes.svg';
import hide from '../assets/hideEyes.svg'

interface InputPasswordProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  showPassword: boolean;
  toggleVisibility: () => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  label,
  value,
  onChange,
  errorMessage,
  showPassword,
  toggleVisibility
}) => {
  return (
    <div className="relative my-4">
      <label className="text-medium font-semibold">{label}</label>
      <input
        type={showPassword ? 'text' : 'password'}
        className="w-full border border-custom-green rounded-xl p-3 mt-1 bg-transparent"
        value={value}
        onChange={onChange}
      />
      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
      <img
        src={showPassword ? open : hide}
        alt="toggle password visibility"
        className="absolute right-3 top-1/2 transform -translate-y-1/8 cursor-pointer w-6 h-6"
        onClick={toggleVisibility}
      />
    </div>
  );
};

export default InputPassword;
