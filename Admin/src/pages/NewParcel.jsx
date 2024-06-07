import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewParcel = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      await publicRequest.post("/parcels", inputs);

      // Clear the input fields
      setInputs({});

      // Show success toast
      toast.success(
        "Parcel has been successfully posted and emails has been sent to the Sender and Recipient!"
      );
    } catch (error) {
      console.log(error);
      toast.error("Failed to post the parcel. Please try again.");
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New Parcel</h2>

      <div className="flex">
        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">From</label>
            <input
              type="text"
              placeholder="Antorio, USA"
              name="from"
              value={inputs.from || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">To</label>
            <input
              type="text"
              placeholder="Saint Mary, USA"
              name="to"
              value={inputs.to || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Name</label>
            <input
              type="text"
              placeholder="James Doe"
              name="sendername"
              value={inputs.sendername || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Name</label>
            <input
              type="text"
              placeholder="James Doe"
              name="recipientname"
              value={inputs.recipientname || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Sender Email</label>
            <input
              type="email"
              required
              placeholder="jamesdoe@gmail.com"
              name="senderemail"
              value={inputs.senderemail || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Recipient Email</label>
            <input
              type="email"
              placeholder="jamesdoe@gmail.com"
              name="recipientemail"
              value={inputs.recipientemail || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
              required
            />
          </div>
        </div>

        <div className="m-[20px]">
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Weight</label>
            <input
              type="Number"
              placeholder="20g"
              name="weight"
              value={inputs.weight || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Cost</label>
            <input
              type="Number"
              placeholder="$50"
              name="cost"
              value={inputs.cost || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Date</label>
            <input
              type="date"
              placeholder="25/06/2024"
              name="date"
              value={inputs.date || ""}
              onChange={handleChange}
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <div className="flex flex-col my-[20px]">
            <label htmlFor="">Note</label>
            <textarea
              placeholder="Perishable goods"
              name="note"
              value={inputs.note || ""}
              onChange={handleChange}
              type="text"
              className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
            />
          </div>
          <button
            className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[300px]"
            onClick={handleSubmit}
          >
            Create
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default NewParcel;
