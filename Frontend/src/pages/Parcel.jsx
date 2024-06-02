import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Parcel = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#D9D9D9] h-[80vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
        <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
        </Link>
        <div className="flex justify-between">
        <div className="flex-1">
          <ul className="m-3">
            <li className="mt-3">From: North carolina</li>
            <li className="mt-3">Weigh: 2 kg</li>
            <li className="mt-3">Date: 20/04/2024</li>
            <li className="mt-3">Sender: James Williams</li>
            <li className="mt-3">To : North carolina</li>
            <li className="mt-3">Cost : $200</li>
            <li className="mt-3">Receiver : James Williams</li>
            <li className="mt-3">Track ID: 672946308462</li>
            <li className="mt-3">
              Note : It contains fragile items should be handled with care{" "}
            </li>
          </ul>
          <button className="bg-[#9CEB77] text-white cursor-pointer p-[10px] m-2 w-[250px]">
            Delivered
          </button>
        </div>
        <div className="flex-1 mr-[20%]">
          <textarea cols={50} rows={7} name="" id="" placeholder="Leave a feedback" className="outline-none p-[5px]"></textarea>
          <button className="bg-[#1E1E1E] w-[200px] p-[10px] text-white cursor-pointer">Submit</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
