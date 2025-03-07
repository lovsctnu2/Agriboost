import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Copyright from '../assets/copyright.svg';
import Dot from '../assets/dot.svg';

const Footer = () => {
  return (
      <div className='py-10 bg-custom-green '>
          <img src={AgriboostWhite} className='ml-5 inline-block' />
        <div className='p-[4px] ml-5 text-sm font-normal text-custom-light-green'>
          <h2 className='font-medium mb-5'>Donate, Educate, Elevate</h2>
          <button className='font-semibold'>Lainnya</button><br />
          <button>Kebijakan Privasi</button><br />
          <button>Syarat dan Ketentuan</button>
          <div className='flex items-center mt-5'>
            <img src={Copyright} className='inline-block' />
            <h2>&nbsp;2025</h2>
            <img src={Dot} className='inline-block' />
            <h2>Kelompok 15 Intern BCC</h2>
          </div>
        </div>
      </div>
      
    );
  };

export default Footer
