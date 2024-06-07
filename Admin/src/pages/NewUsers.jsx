import { useState } from "react";
import { publicRequest } from "../requestMethods";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const NewUsers = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const generatePassword = (length) => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*";

    const allChars = lowerCaseChars + upperCaseChars + numberChars + specialChars;

    let password = "";

    // Ensure the password contains at least one of each required type
    password += lowerCaseChars[Math.floor(Math.random() * lowerCaseChars.length)];
    password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];
    password += numberChars[Math.floor(Math.random() * numberChars.length)];
    password += specialChars[Math.floor(Math.random() * specialChars.length)];

    // Fill the rest of the password length with random characters from all types
    for (let i = password.length; i < length; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // Shuffle the characters to ensure a random order
    password = password.split("").sort(() => 0.5 - Math.random()).join("");

    return password;
  };

  const handleSubmit = async () => {
    try {
      const password = generatePassword(12);

      await publicRequest.post("/auth/register", { ...inputs, password });

      // Clear the input fields
      setInputs({});

      // Show success toast
      toast.success("User has been successfully registered and an email has been sent to them!");

    } catch (error) {
      console.log(error);
      toast.error("Failed to register the user. Please try again.");
    }
  };

  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <h2 className="font-semibold">New User</h2>

      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Full Name</label>
        <input
          type="text"
          placeholder="James Doe"
          name="fullname"
          value={inputs.fullname || ''}
          onChange={handleChange}
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Email</label>
        <input
          type="text"
          placeholder="jamesdoe@gmail.com"
          name="email"
          value={inputs.email || ''}
          onChange={handleChange}
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Age</label>
        <input
          type="Number"
          placeholder="30"
          name="age"
          value={inputs.age || ''}
          onChange={handleChange}
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Country</label>
        <input
          type="text"
          placeholder="Australia"
          name="country"
          value={inputs.country || ''}
          onChange={handleChange}
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>
      <div className="flex flex-col my-[20px]">
        <label htmlFor="">Address</label>
        <input
          type="text"
          placeholder="Laura Avenue, Sydney, Australia"
          name="address"
          value={inputs.address || ''}
          onChange={handleChange}
          className="border-2 border-[#555] border-solid p-[10px] w-[300px]"
        />
      </div>

      <button
        className="bg-[#1E1E1E] cursor-pointer text-white p-[10px] w-[200px]"
        onClick={handleSubmit}
      >
        Create
      </button>

      <ToastContainer />
    </div>
  );
};

export default NewUsers;
