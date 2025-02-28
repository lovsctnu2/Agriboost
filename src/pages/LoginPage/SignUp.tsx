import React, { useState } from 'react';
import Agriboost from '../assets/AgriBoost.svg';
import Carbon from '../assets/Vector.svg';
import Google from '../assets/devicon_google.svg';
import Petani from '../assets/Group 1.svg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  const inputTerisi = () => {
    const filled = email !== '' && password !== '' && confirmPassword !== '';
    setIsFilled(filled);
    console.log('Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    console.log('isFilled:', filled);
  };

  return (
    <div className="text-custom-green h-[100vh] flex justify-center items-center">
    <div className='m-10'>
    <img src={Petani} />
    </div>
      <div>
      <img src={Carbon} />
        <img src={Agriboost} />
        <h1 className="text-2xl text-custom-darkgreen font-bold text-center py-4">
          Buat Akun
        </h1>
        <form action="">
          <div className="relative my-4">
            <label className="text-medium font-semibold">Email</label>
            <input
              type="email"
              className="w-full border border-custom-green rounded-xl p-3 mt-1 bg-transparent"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                inputTerisi();
              }}
            />
          </div>


          <div className="relative my-4">
            <label className="text-medium font-semibold">No Handphone</label>
            <input
              type="password"
              className="w-full border border-custom-green rounded-xl p-3 mt-1 bg-transparent"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                inputTerisi();
              }}
            />
          </div>

          
          <div className="relative my-4">
            <label className="text-medium font-semibold">Kata Sandi</label>
            <input
              type="password"
              className="w-full border border-custom-green rounded-xl p-3 mt-1 bg-transparent"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                inputTerisi();
              }}
            />
          </div>


          <div className="mt-8 flex justify-between items-center">
            <div>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-3 mt-0 text-sm ">
              Saya setuju dengan <span className='font-bold'>kebijakan privasi</span> serta <span className='font-bold'>syarat dan ketentuan</span> <br />yang berlaku
              </label>
            </div>
          </div>
          

          <div className="mt-8 flex flex-col gap-y-4">
            <button
              className={`py-3 rounded-xl ${
                isFilled ? 'bg-custom-green' : 'bg-custom-logingreen'
              } text-white text-normal`}
              disabled={!isFilled}>
              Daftar
            </button>

            <div className='relative-fill flex items-center justify-center py-1'>
              <div className='w-2/3 h-[1.5px] bg-custom-logingreen'></div>
              <h3 className='text-xs md: text-sm font-light px-4 text-custom-logingreen'>atau</h3>
              <div className='w-2/3 h-[1.5px] bg-custom-logingreen'></div>
            </div>

            <button className="py-3 rounded-xl text-black flex items-center justify-center gap-2 border-2 border-black">
            <img src={Google}  className='flex flex-row items-start w-5 h-5 mr-2'/>
              Daftar dengan Google
            </button>

            <div className='py-1 text-sm text-black flex items-center justify-center'>
              <p>Sudah memiliki akun?</p>
              <span className='font-bold ml-1'>Masuk</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;