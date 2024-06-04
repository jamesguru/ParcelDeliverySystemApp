const Parcel = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">Edit Parcel</h2>

      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              type="text"
              placeholder="Antorio, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">To</label>
            <input
              type="text"
              placeholder="Saint Mary, USA"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              placeholder="James Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              placeholder="James Doe"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Email</label>
            <input
              type="email"
              placeholder="jamesdoe@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Email</label>
            <input
              type="email"
              placeholder="jamesdoe@gmail.com"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              placeholder="20g"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Cost</label>
            <input
              type="Number"
              placeholder="$50"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea
              placeholder="Perishable goods"
              type="text"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>

          <div className="flex flex-col my-[20px]">
            <select
              name=""
              id=""
              className="cursor-pointer border-2 border-[#555] border-solid p-[10px]"
            >
              <option value="">Pending</option>
              <option value="">Delivered</option>
              <option value="">Rejected</option>
            </select>
          </div>

          <button className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]">
            Update
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="font-semibold">Feedback</h2>
          <span>Goods received in good condition.</span>
          <span className="text-red-500 text-[18px]">Pending</span>
        </div>
      </div>
    </div>
  );
};

export default Parcel;
