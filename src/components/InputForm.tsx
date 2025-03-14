import React from 'react';

interface InputFormProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  optional?: boolean;
}

const InputForm: React.FC<InputFormProps> = ({
  label,
  type,
  value,
  onChange,
  errorMessage
}) => {
  return (
    <div className="relative my-4">
      <label className="text-medium font-semibold">{label}</label>
      <input
        type={type}
        className="w-full border border-custom-green rounded-xl p-3 mt-1 bg-transparent"
        value={value}
        onChange={onChange}
      />
      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
    </div>
  );
};

export default InputForm;
