import HeaderLogin from "../components/HeaderLogin";
const Verify = () => {
  return (
    <div>
        <HeaderLogin />
        <div className="my-8 text-custom-real-dark-green text-center">
            <h4 className="text-xl font-bold ">Verifikasi Akun</h4>
            <h5 className="text-sm font-semibold mt-14">Masukkan 6 digit kode verifikasi yang telah dikirim ke nomor 0851**0007</h5>
            <h6 className="my-8 text-xs font-normal">Belum menerima kode?<span>
            <button className="text-xs font-bold">
            &nbsp;Kirim ulang
            </button>
            </span></h6>
            
        </div>
    </div>
  );
};

export default Verify