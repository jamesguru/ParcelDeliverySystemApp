const Footer = () => {
  return (
    <div className="h-[300px] bg-[#E9EB77] flex items-center justify-between p-[30px]">
      <div className="flex flex-col">
      <img src="/logo.png" height="200px" width="200px" alt="" />
        <span className="w-[70%]">
          We understand that your parcels carry more than just items— they carry
          your trust. Committed to excellence,
        </span>
      </div>
      <div className="flex flex-col">
        <span>Design by V8Techworks</span>
        <span>&copy; copyright 2024</span>
      </div>
    </div>
  );
};

export default Footer;
