import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../components/HeaderLogin';
import InputForm from '../components/InputForm';

const Biodata = () => {
  const [name, setName] = useState<string>('');
  const [job, setJob] = useState<string>('');
  const [institution, setInstitution] = useState<string>(''); // Opsional
  const [address, setAddress] = useState<string>('');
  const [isFilled, setIsFilled] = useState<boolean>(false);

  const navigate = useNavigate();

  const inputTerisi = () => {
    setIsFilled(
      name !== '' &&
      job !== '' &&
      address !== ''      
    );
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    inputTerisi();
  };

  const handleJobChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJob(e.target.value);
    inputTerisi();
  };

  const handleInstitutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstitution(e.target.value);
    inputTerisi();
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    inputTerisi();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFilled) {
      navigate('/Home'); 
    } else {
      console.log('Form tidak lengkap');
    }
  };

  useEffect(() => {
    inputTerisi();
  }, [name, job, address]);

  return (
    <div>
        <HeaderLogin />
      <div className='flex justify-center '>
        <div className='w-[320px] h-[774px] bg-white"'>
          <h1 className="text-xl text-custom-real-dark-green font-bold text-center py-4">
            Lengkapi Biodata
          </h1>
      <form onSubmit={handleSubmit} className='text-custom-green'>
        <InputForm
          label="Nama Lengkap"
          type="text"
          value={name}
          onChange={handleNameChange}
        />
        <InputForm
          label="Pekerjaan"
          type="text"
          value={job}
          onChange={handleJobChange}
        />
        <InputForm
          label="Lembaga*"
          type="text"
          value={institution}
          onChange={handleInstitutionChange}
          optional={true}
        />
        <InputForm
          label="Alamat"
          type="text"
          value={address}
          onChange={handleAddressChange}
        />

        <p className='text-custom-real-dark-green text-xs font-normal'>* opsional</p>

        <button
            type="submit"
            className={`mt-10 py-3 w-full rounded-lg ${isFilled ? 'bg-custom-green' : 'bg-custom-login-green'} text-white text-normal`}
            disabled={!isFilled}>
            Simpan
        </button>

        </form>
        </div>
      </div>
</div>
  );
};


export default Biodata;