import "./../assets/css/index.css";
import { useNavigate } from "react-router-dom";

function handleClick() {
  const navigate = useNavigate();
  navigate("/login");
}
const Login = () => {
  return (
    <div id="login" className="w-screen h-screen flex justify-center">
      <div className="container font-avenir my-auto block w-[416px] h-[490px] shadow-slate-400 shadow-lg py-[50px]">
        <h1 className="text-center text-4xl font-semibold uppercase mb-16 bg-clip-text text-transparent bg-gradient-to-t from-strong-pink to-soft-pink">Login</h1>
        <input type="text" className="block mx-auto w-[350px] h-[50] mb-8 text-2xl border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Username" />
        <input type="password" className="block mx-auto w-[350px] h-[50] mb-16 text-2xl border-2 border-soft p-2 placeholder-soft rounded-md" placeholder="Password" />
        <button type="submit" className="font-bold block text-white mx-auto w-[350px] h-[50] p-2 mb-4 text-[24px] bg-gradient-to-t from-strong-pink to-soft-pink rounded-full">
          Login
        </button>
        <p class="cursor-pointer text-center text-[20px] text-soft opacity-90" onClick={handleClick}>
          Belum Punya Akun ? Klik <span className="text-soft font-bold">disini</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
