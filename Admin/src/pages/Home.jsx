import { HiArrowSmallUp, HiArrowLongDown } from "react-icons/hi2";
import { PieChart } from "@mui/x-charts/PieChart";

const Home = () => {
  return (
    <div>
      <div className="flex items-center">
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Users</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">200</span>
          </div>
        </div>
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Delivered Parcels</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">2000</span>
          </div>
        </div>
        <div className="flex flex-col text-[#D9D9D9] h-[250px] w-[350px] shadow-lg m-[20px]">
          <div className="flex flex-col items-center justify-center mt-[10%]">
            <h1 className="text-[20px] font-semibold">Pending Parcels</h1>
            <div className="flex items-center my-[10px]">
              <HiArrowSmallUp className="text-[28px] text-green-500" />
              <HiArrowLongDown className="text-[28px] text-red-500" />
            </div>
            <span className="mt-[20px] text-[18px]">100</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-evenly">
        <div className="h-[450px] w-[500px] text-[#fff]">
          <PieChart
            series={[
              {
                data: [
                  { id: 0, value: 2000, label: "Delivered Parcels" },
                  { id: 1, value: 100, label: "Pending Parcels" },
                  { id: 2, value: 50, label: "Rejected Parcels" },
                ],

                innerRadius: 40,
                outerRadius: 100,
                paddingAngle: 5,
                cornerRadius: 5,
                startAngle: -100,
                endAngle: 180,
                cx: 150,
                cy: 150,
              },
            ]}
          />
        </div>

        <div className="h-[350px] w-[300px] shadow-xl p-[20px]">
          <h2 className="flex px-[20px] text-[#fff]">Recent Users</h2>

          <ol className="flex font-semibold flex-col justify-end px-[20px] mt-[10px]  text-[#D9D9D9]">
            <li>1. John Doe</li>
            <li>2. Alex Doe</li>
            <li>3. Jane Doe</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Home;
