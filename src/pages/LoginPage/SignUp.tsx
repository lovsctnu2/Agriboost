import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Google from '../../assets/devicon_google.svg';
import HeaderLogin from '../../components/HeaderLogin';
import InputForm from '../../components/InputForm';
import InputPassword from '../../components/InputPassword';
import {signUp} from '../../api/Authetntication';


interface SignUp {
    email: string;
    phone: string;
    password: string;
}

interface SignUpErrorMessageProps {
    message: string;
  }

const SignUp: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [emailError, setEmailError] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [noHandphoneError, setNoHandphoneError] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [passwordError, setPasswordError] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [errorSignUp, setErrorSignUp] = useState<string>('');
    const [isFilled, setIsFilled] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const navigate = useNavigate();

    const validateEmail = (email: string) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    };

    const validateNoHandphone = (noHandphone: string) => {
        const phoneRegex = /^[0-9]{12,15}$/;
        return phoneRegex.test(noHandphone);
    };

    const validatePassword = (password: string) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordRegex.test(password);
    };

    const inputTerisi = () => {
        const isEmailValid = validateEmail(email);
        const isPhoneValid = validateNoHandphone(phone);
        const passwordValidationError = validatePassword(password);

        setEmailError(isEmailValid ? '' : 'Email tidak valid');
        setNoHandphoneError(isPhoneValid ? '' : 'Nomor handphone harus berisi angka dengan panjang antara 12 hingga 15 digit');
        setPasswordError(passwordValidationError ? '' : 'Password minimal 8 karakter dengan menggunakan huruf kecil, huruf besar, angka, dan karakter spesial');

        setIsFilled(
            email !== '' &&
            phone !== '' &&
            password !== '' &&
            isEmailValid &&
            isPhoneValid &&
            passwordValidationError &&
            !isChecked
        );
    };

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        inputTerisi();
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (email && phone && password && validateEmail(email) && validateNoHandphone(phone)) {
            const data = {
                        email : email,
                        phone : phone,
                        password : password
                      }
                      console.log(data)
                      signUp(data, (success) => {
                        if (success) {
                          navigate('/Verify'); 
                        } else {
                          setErrorSignUp("Email sudah terdaftar.")
                        }
                      });
        } else {
            console.log('Form tidak lengkap atau tidak valid');
        }
    };

    const handleLoginClick = () => {
        navigate('/');
    };

    const SignUpErrorMessage: React.FC<SignUpErrorMessageProps> = ({ message }) => {
          if (!message) return null; 
        
          return (
            <div
              className="bg-red-100 text-red-700 border border-red-400 p-3 rounded-lg mt-3 text-sm text-center 
                         animate-fade-in"
            >
              {message}
            </div>
          );
        };

    return (
        <div>
            <HeaderLogin />
            <div className='flex justify-center'>
                <div className='w-[320px] h-[774px]'>
                    <h1 className="text-2xl text-custom-darkgreen font-bold text-center px-5">
                        Buat Akun
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <InputForm
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                inputTerisi();
                            }}
                            errorMessage={emailError}
                        />

                        <InputForm
                            label="No Handphone"
                            type="text"
                            value={phone}
                            onChange={(e) => {
                                setPhone(e.target.value);
                                inputTerisi();
                            }}
                            errorMessage={noHandphoneError}
                        />

                        <InputPassword
                            label="Kata Sandi"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                                inputTerisi();
                            }}
                            errorMessage={passwordError}
                            showPassword={showPassword}
                            toggleVisibility={() => setShowPassword(!showPassword)}
                        />

                        <div className="mt-8 flex justify-between items-center text-sm">
                            <div>
                                <input
                                    type="checkbox"
                                    id="remember"
                                    checked={isChecked} 
                                    onChange={handleCheckboxChange}
                                />
                                <label htmlFor="remember" className="ml-3 mt-0 text-sm">
                                    Saya setuju dengan <span className='font-bold'>kebijakan privasi</span><br />
                                    <span className='ml-6'>serta</span> <span className='font-bold'>syarat dan ketentuan</span> yang <br />
                                    <span className='ml-6'>berlaku</span>
                                </label>
                            </div>
                        </div>

                        <SignUpErrorMessage message = {errorSignUp}/>

                        <div className="mt-8 flex flex-col gap-y-4">
                            <button
                                className={`py-3 rounded-xl ${isFilled ? 'bg-custom-green' : 'bg-custom-login-green'} text-white text-normal`}
                                disabled={!isFilled} 
                            >
                                Daftar
                            </button>

                            <div className='relative-fill flex items-center justify-center py-1'>
                                <div className='w-2/3 h-[1.5px] bg-custom-login-green'></div>
                                <h3 className='md: text-sm font-light px-4 text-custom-login-green'>atau</h3>
                                <div className='w-2/3 h-[1.5px] bg-custom-login-green'></div>
                            </div>

                            <button className="py-3 rounded-xl text-black flex items-center justify-center gap-2 border-2 border-black">
                                <img src={Google} className='flex flex-row items-start w-5 h-5 mr-2' alt='google icon' />
                                Daftar dengan Google
                            </button>

                            <div className='py-1 text-sm text-black flex items-center justify-center'>
                                <p>Sudah memiliki akun?</p>
                                <button className='font-bold ml-1' onClick={handleLoginClick}>Masuk</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;