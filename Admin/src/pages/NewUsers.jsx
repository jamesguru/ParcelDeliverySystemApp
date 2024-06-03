
const NewUsers = () => {
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="James Doe"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="jamesdoe@gmail.com"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Age</label>
        <input
          type="Number"
          placeholder="30"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Country</label>
        <input
          type="text"
          placeholder="Australia"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Laura Avenue, Sydney, Australia"
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      
      <button className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[200px]">
        Create
      </button>
    </div>
  )
}

export default NewUsers