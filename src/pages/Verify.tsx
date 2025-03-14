import React, { useState } from 'react';
import HeaderLogin from '../components/HeaderLogin';

const Verify = () => {
    const [verificationCode, setVerificationCode] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const newValue = e.target.value;
        if (newValue.length <= 1 && /^[0-9]*$/.test(newValue)) {
            const codeArray = verificationCode.split('');
            codeArray[index] = newValue;
            setVerificationCode(codeArray.join('').padEnd(6, '')); // Memastikan panjang 6 karakter
            if (newValue && index < 5) {
                const nextInput = document.getElementById(`code-${index + 1}`) as HTMLInputElement;
                nextInput?.focus();
            }
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 6);
        if (/^[0-9]{6}$/.test(pastedData)) {
            setVerificationCode(pastedData);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
            const prevInput = document.getElementById(`code-${index - 1}`) as HTMLInputElement;
            prevInput?.focus();
        }
    };

    const codeInputs = Array.from({ length: 6 }, (_, index) => (
        <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={verificationCode[index] || ''}
            onChange={(e) => handleInputChange(e, index)}
            onPaste={handlePaste}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-8 h-[50px] border-b-2 border-custom-green text-center text-3xl font-bold focus:outline-none"
        />
    ));

    return (
      <div>
        <HeaderLogin />
      <div className="px-5 py-8"> 
            <div className="my-8 text-custom-real-dark-green text-center">
                <h4 className="text-xl font-bold ">Verifikasi Akun</h4>
                <h5 className="text-sm font-semibold mt-10">Masukkan 6 digit kode verifikasi yang telah dikirim ke nomor 0851****0007</h5>
                <div className="flex justify-center text-xl font-bold space-x-1 my-[144px] ">{codeInputs}</div>
                <button className="bg-custom-green text-white text-sm py-3 px-5 w-full rounded-lg font-semibold">KIRIM</button>
                <h6 className="mt-8 text-xs font-normal">Belum menerima kode?<span>
                    <button className="text-xs font-bold">
                        &nbsp;Kirim ulang
                    </button>
                </span></h6>
            </div>
        </div>
        </div>
    );
};

export default Verify;