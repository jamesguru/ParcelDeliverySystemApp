import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { publicRequest } from "../requestMethods";

const Parcel = () => {
  const location = useLocation();
  const parcelId = location.pathname.split("/")[2];
  const [parcel, setParcel] = useState({});

  useEffect(() => {
    const getParcel = async () => {
      try {
        const res = await publicRequest.get("/parcels/find/" + parcelId);
        setParcel(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcel();
  }, [parcelId]);
  
  return (
    <div className="flex flex-col items-center justify-center mt-[3%] mr-[5%] ml-[5%]">
      <div className="bg-[#D9D9D9] h-[80vh] w-[60vw] rounded-md">
        <Link to="/myparcels">
          <FaArrowLeft className="text-[18px] m-2 cursor-pointer" />
        </Link>
        <div className="flex justify-between">
          <div className="flex-1">
            <ul className="m-3">
              <li className="mt-3">From: {parcel.from}</li>
              <li className="mt-3">Weigh: {parcel.weight} kg</li>
              <li className="mt-3">Date: {parcel?.date}</li>
              <li className="mt-3">Sender: {parcel.sendername}</li>
              <li className="mt-3">To : {parcel.to}</li>
              <li className="mt-3">Cost : ${parcel.cost}</li>
              <li className="mt-3">Receiver : {parcel.recipientname}</li>
              <li className="mt-3">Track ID: {parcel._id}</li>
              <li className="mt-3">Note : {parcel.note}</li>
            </ul>
            <button
              className={
                parcel.status === 1
                  ? "bg-[#555] text-white w-[100px] cursor-pointer padding-[10px] m-[20px]"
                  : "bg-[#45de52] text-white w-[100px] cursor-pointer padding-[10px] m-[20px]"
              }
            >
              {parcel.status === 1 ? "Pending" : "Delivered"}
            </button>
          </div>
          <div className="flex-1 mr-[20%]">
            <ul className="m-3">
              <li className="mt-3">Sender Email: {parcel.senderemail}</li>
              <li className="mt-3">Recipient Email: {parcel.recipientemail}</li>
            </ul>
            <textarea
              cols={50}
              rows={7}
              name=""
              id=""
              placeholder="Leave a feedback"
              className="outline-none p-[5px]"
            ></textarea>
            <button className="bg-[#1E1E1E] w-[200px] p-[10px] text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
