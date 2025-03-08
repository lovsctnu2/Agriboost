
import AgriboostWhite from '../assets/AgriboostLogo.svg';
import Hamburger from '../assets/Hamburger.svg';


const Header = () => {
  return (
    <div className='py-4 bg-custom-green '>
      <img src={AgriboostWhite} className='ml-5 inline-block' />
      <button className='absolute top-0 right-0 mr-5 mt-4'>
        <img src={Hamburger} className='inline-block' />
      </button>
      
    </div>
  );
};

export default Header
