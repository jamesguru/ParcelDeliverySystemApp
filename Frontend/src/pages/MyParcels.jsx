import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className="relative flex items-end justify-end mr-[20%] mt-[3%]">
        <div>
          <span
            className="flex items-center text-white font-semibold cursor-pointer"
            onClick={handleOpen}
          >
            <FaUser className="mr-[10px]" />
            Alok Mondala
          </span>
        </div>
        {open && (
          <div className="absolute top-[20px] right-0 h-[200px] w-[250px] bg-[#D9D9D9] z-[999] shadow-xl">
            <ul className="flex flex-col items-center justify-center mt-[10px]">
              <Link to="/allparcels">
                <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                  All parcels
                </li>
              </Link>
              <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                Statements
              </li>
              <Link to="/">
                <li className="hover:text-[#fff] my-[5px] cursor-pointer">
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-evenly px-[5%]">
        <div className="h-[90vh] w-[60vw] rounded-md">
          <h2 className="text-[18px] text-[#D9D9D9] p-[20px]">My Parcels</h2>
          <div className="flex justify-between bg-[#D9D9D9] h-[150px] w-[60vw] m-[20px] p-[20px] cursor-pointer">
            <div>
              <ul>
                <li>From: North carolina</li>
                <li>Weigh: 2 kg</li>
                <li>Date: 20/04/2024</li>
                <li>Sender: James Williams</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <span>To: North carolina</span>
              <button className="bg-[#555] text-white cursor-pointer padding-[5px]">
                Pending
              </button>
            </div>
          </div>
          <div className="flex justify-between bg-[#d9d9d9] h-[150px] w-[60vw] m-[20px] p-[20px] cursor-pointer">
            <div>
              <ul>
                <li>From: North carolina</li>
                <li>Weigh: 2 kg</li>
                <li>Date: 20/04/2024</li>
                <li>Sender: James Williams</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <span>To: North carolina</span>
              <button className="bg-[#b0ec4a] text-white cursor-pointer padding-[5px]">
                Delivered
              </button>
            </div>
          </div>

          <div className="flex justify-between bg-[#D9D9D9] h-[150px] w-[60vw] m-[20px] p-[20px] ">
            <div>
              <ul>
                <li>From: North carolina</li>
                <li>Weigh: 2 kg</li>
                <li>Date: 20/04/2024</li>
                <li>Sender: James Williams</li>
              </ul>
            </div>

            <div className="flex flex-col">
              <span>To: North carolina</span>
              <button className="bg-[#df3b3b] text-white cursor-pointer padding-[5px]">
                Rejected
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
