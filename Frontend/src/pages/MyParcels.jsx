import { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/userRedux";

const MyParcels = () => {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getParcels = async () => {
      try {
        const res = await publicRequest.post("/parcels/me", {
          email: user.currentUser.email,
        });
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getParcels();
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/login");
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
              <li className="hover:text-[#fff] my-[5px] cursor-pointer" onClick={handleLogout}>
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="flex justify-evenly px-[5%]">
        <div className="h-[90vh] w-[60vw] rounded-md">
          <h2 className="text-[18px] text-[#D9D9D9] p-[20px]">My Parcels</h2>
          {data.map((parcel, index) => (
            <Link key={index} to={`/parcel/${parcel._id}`}>
              <div className="flex justify-between bg-[#D9D9D9] h-[150px] w-[60vw] m-[20px] p-[20px] cursor-pointer">
                <div>
                  <ul>
                    <li>From: {parcel.from}</li>
                    <li>Weigh: {parcel.weight} kg</li>
                    <li>Date: {parcel.date}</li>
                    <li>Sender: {parcel.sendername}</li>
                  </ul>
                </div>

                <div className="flex flex-col">
                  <span>To: {parcel.to}</span>
                  <button
                    className={
                      parcel.status === 1
                        ? "bg-[#555] text-white w-[100px] cursor-pointer padding-[5px]"
                        : "bg-[#45de52] text-white w-[100px] cursor-pointer padding-[5px]"
                    }
                  >
                    {parcel.status === 1 ? "Pending" : "Delivered"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyParcels;
