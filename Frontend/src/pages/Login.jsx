import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <img src="/hero.png" alt="" />
        <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md">
            <input type="text" className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none" placeholder="Enter your email" />
            <input type="text" className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none" placeholder="Enter your password" />
            <button className="bg-[#1E1E1E] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]">Login</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
