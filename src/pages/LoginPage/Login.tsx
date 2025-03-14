import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderLogin from '../../components/HeaderLogin';
import Google from '../../assets/devicon_google.svg';
import InputForm from '../../components/InputForm';
import InputPassword from '../../components/InputPassword';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>('');
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const navigate = useNavigate(); 

  // Validasi email
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Validasi password (harus ada huruf kecil, besar, angka, dan karakter spesial)
  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Validasi konfirmasi password
  const validateConfirmPassword = (password: string, confirmPassword: string) => {
    return password === confirmPassword;
  };

  // Update status error untuk email, password, dan confirm password
  const inputTerisi = () => {
    const isEmailValid = validateEmail(email);
    const passwordValidationError = validatePassword(password);
    const confirmPasswordValidationError = validateConfirmPassword(password, confirmPassword);

    setEmailError(isEmailValid ? '' : 'Email tidak valid');
    setPasswordError(passwordValidationError ? '' : 'Password minimal 8 karakter dengan menggunakan huruf kecil, huruf besar, angka, dan karakter.');
    setConfirmPasswordError(confirmPasswordValidationError ? '' : 'Password dan konfirmasi kata sandi tidak cocok');

    // tombol masuk aktif jika semua input terisi dan valid
    setIsFilled(
      email !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      isEmailValid &&
      passwordValidationError &&
      confirmPasswordValidationError &&
      isChecked
    );
  };

  // Fungsi handle ketika email berubah
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    inputTerisi();
  };

  // Fungsi handle ketika password berubah
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    inputTerisi();
  };

  // Fungsi handle ketika confirm password berubah
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
    inputTerisi();
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // toggle state checkbox
    inputTerisi(); // Menjalankan validasi kembali ketika checkbox diubah
};

  // Handle login submit
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Mencegah halaman reload

    // Pastikan input valid sebelum login
    if (email && password && confirmPassword && !emailError && !passwordError && !confirmPasswordError) {
      navigate('/Home');
    } else {
      console.log('Form tidak lengkap');
    }
  };

  // Handle navigasi ke halaman registrasi
  const handleRegistClick = () => {
    navigate('/SignUp');
  };

  // Menjalankan validasi ketika ada perubahan di email, password, atau confirm password
  useEffect(() => {
    inputTerisi();
  }, [email, password, confirmPassword]);

  return (
    <div>
      <HeaderLogin />
      <div className='flex justify-center'>
        <div className='w-[320px] h-[774px]'>
          <h1 className="text-2xl text-custom-darkgreen font-bold text-center py-4">
            Masuk
          </h1>
          <form onSubmit={handleLogin}>
            <InputForm
              label="Email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              errorMessage={emailError}
            />

            <InputPassword
              label="Kata Sandi"
              value={password}
              onChange={handlePasswordChange}
              errorMessage={passwordError}
              showPassword={showPassword}
              toggleVisibility={() => setShowPassword(!showPassword)}
            />

            <InputPassword
              label="Konfirmasi Kata Sandi"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              errorMessage={confirmPasswordError}
              showPassword={showConfirmPassword}
              toggleVisibility={() => setShowConfirmPassword(!showConfirmPassword)}
            />

            <div className="mt-8 flex justify-between items-center">
              <div>
                <input  
                  type="checkbox"
                  id="remember"
                  checked={!isChecked}
                  onChange={handleCheckboxChange}
                />
                <label htmlFor="remember" className="text-sm ml-2">
                  Ingat Saya
                </label>
              </div>
              <button className="text-sm font-bold text-black">
                Lupa Kata Sandi?
              </button>
            </div>

            <div className="mt-8 flex flex-col gap-y-4">
              <button
                className={`py-3 rounded-xl ${isFilled ? 'bg-custom-green' : 'bg-custom-login-green'} text-white text-normal`}
                disabled={!isFilled}
              >
                Masuk
              </button>

              <div className='relative-fill flex items-center justify-center py-1'>
                <div className='w-2/3 h-[1.5px] bg-custom-login-green'></div>
                <h3 className='text-sm md: font-light px-4 text-custom-login-green'>atau</h3>
                <div className='w-2/3 h-[1.5px] bg-custom-login-green'></div>
              </div>

              <button className="py-3 rounded-xl text-black flex items-center justify-center gap-2 border-2 border-black">
                <img src={Google} className='flex flex-row items-start w-5 h-5 mr-2' />
                Masuk dengan Google
              </button>

              <div className='py-1 text-sm text-black flex items-center justify-center'>
                <p>Belum memiliki akun?</p>
                <button className='font-bold ml-1' onClick={handleRegistClick}>Daftar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
