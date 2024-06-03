import {
  FaHome,
  FaUsers,
  FaUser,
  FaBox,
  FaClipboardList,
  FaElementor,
  FaCog,
  FaHdd,
  FaChartBar,
  FaClipboard,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="h-[90vh] shadow-xl">
      <ul className="flex flex-col items-center justify-center mt-[20px]">
        <Link to="/">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaHome className="mr-[15px]" />
            Home
          </li>
        </Link>
        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaUser className="mr-[15px]" />
          Profile
        </li>

        <hr className="h-[20px]" />

        <Link to="/parcels">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaBox className="mr-[15px]" />
            Parcels
          </li>
        </Link>

        <Link to="/users">
          <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
            <FaUsers className="mr-[15px]" />
            Users
          </li>
        </Link>

        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaClipboardList className="mr-[15px]" />
          Orders
        </li>

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaElementor className="mr-[15px]" />
          Elements
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaCog className="mr-[15px]" />
          Settings
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaHdd className="mr-[15px]" />
          Backups
        </li>

        <hr className="h-[20px]" />

        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaChartBar className="mr-[15px]" />
          Charts
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaClipboard className="mr-[15px]" />
          All Logs
        </li>
        <li className="flex items-center text-[#D7D7D7] text-[18px] hover:text-[#E9EB77] cursor-pointer mt-[20px]">
          <FaCalendarAlt className="mr-[15px]" />
          Calendar
        </li>
      </ul>
    </div>
  );
};

export default Menu;
