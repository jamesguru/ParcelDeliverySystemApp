const Navbar = () => {
  return (
    <div className="flex items-center bg-[#E9EB77] justify-between h-[70px]">
      <img
        src="/logo.png"
        alt=""
        height={150}
        width={150}
        className="text-white"
      />

      <span className="mr-[20px] text-[18px] cursor-pointer">Logout</span>
    </div>
  );
};

export default Navbar;
