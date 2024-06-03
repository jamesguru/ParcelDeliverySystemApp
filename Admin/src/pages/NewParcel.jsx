const NewParcel = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>

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
        <label htmlFor="">Sender</label>
        <input
          type="text"
          placeholder="Jane Doe"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Recipient</label>
        <input
          type="text"
          placeholder="James Doe"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Sydney, Australia"
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

      <button className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[200px]">
        Create
      </button>
    </div>
  );
};

export default NewParcel;
