const Footer = () => {
  return (
    <div className="flex items-center bg-[#E9EB77] justify-between h-[100px]">
      <img
        src="/logo.png"
        alt=""
        height={150}
        width={150}
        className="text-white"
      />
      <ul className="m-[20px]">
        <li>Admin</li>
        <li>&copy; 2024</li>
      </ul>
    </div>
  );
};

export default Footer;
