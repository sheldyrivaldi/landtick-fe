import "./../assets/css/index.css";
// import { useNavigate } from "react-router-dom";

// function handleClick() {
//   const navigate = useNavigate();
//   navigate("/login");
// }
const Register = () => {
  return (
    <div id="register" className="w-screen h-screen flex justify-center">
      <div className="container font-avenir my-auto block w-[416px] h-[543px] shadow-slate-400 shadow-lg">
        <div className="w-[416px] mt-0 h-[490px] overflow-y-auto pt-[50px]">
          <form action="">
            <h1 className="text-center text-4xl font-semibold tracking-wider mb-16 bg-clip-text text-transparent bg-gradient-to-t from-strong-pink to-soft-pink">Daftar</h1>
            <input type="text" id="name" name="name" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Nama Lengkap" />
            <input type="text" id="username" name="username" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Username" />
            <input type="email" id="email" name="email" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Email" />
            <input type="password" id="password" name="password" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Password" />
            <select className="block mx-auto w-[350px] h-[50] mb-8 text-2xl border-2 border-soft p-2 text-soft bg-white rounded-md">
              <option value="" className="text-2xl text-soft rounded-md" hidden>
                Jenis Kelamin
              </option>
              <option value="Pria" className="text-2xl text-slate-600 rounded-md">
                Pria
              </option>
              <option value="Wanita" className="text-2xl text-slate-600 rounded-md">
                Wanita
              </option>
            </select>
            <input type="number" id="telp" name="telp" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Telp" />
            <textarea id="address" name="address" className="block resize-none mx-auto w-[350px] h-[200px] mb-16 text-2xl text-slate-600 border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Alamat"></textarea>
            <button type="submit" className="font-bold block text-white mx-auto w-[350px] h-[50] p-2 mb-0 text-[24px] bg-gradient-to-t from-strong-pink to-soft-pink rounded-full">
              Daftar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
