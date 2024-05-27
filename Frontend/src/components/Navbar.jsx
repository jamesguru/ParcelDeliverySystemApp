import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-[100px] bg-[#E9EB77] flex items-center justify-between px-10">
      <Link to="/">
        <img src="/logo.png" height="200px" width="200px" alt="" />
      </Link>
      <Link to="/login">
        <button className="bg-[#1E1E1E] p-[10px] text-gray-300 cursor-pointer border-none w-[100px]">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
