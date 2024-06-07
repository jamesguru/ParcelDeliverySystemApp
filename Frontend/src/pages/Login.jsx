import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCalls";
import { Navigate} from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user);
  const error = useSelector((state) => state.user.error);
  const dispatch = useDispatch();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    if (email && password) {
      try {
        setLoading(true);
        await login(dispatch, { email, password });
        setLoading(false); // Navigate on successful login
      } catch (error) {
        setLoading(false);

        // Handle login error (e.g., display an error message)
      }
    }
  };

  
  
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center justify-evenly p-[50px] text-gray-300">
        <img src="/hero.png" alt="" />
        <div className="h-[450px] w-[450px] bg-[#E9EB77] rounded-md">
          <input
            type="text"
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] m-[10%] outline-none"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value.replace(/\s/g, ''))}
          />
         <div className="flex items-center">
         <input
            type={showPassword ? "text" : "password"}
            className="flex items-center justify-center bg-[#fff] p-[20px] w-[350px] ml-[10%] outline-none"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value.replace(/\s/g, ''))}
          />
           <span
            style={{
              display: "inline",
              cursor: "pointer",
              fontSize: "20px",
            }}
            onClick={handleTogglePassword}
          >
            {showPassword ? "👁️" : "🔒"}
          </span>
         </div>

         <button className="bg-[#1E1E1E] w-[350px] p-[15px] text-white font-semibold text-[18px] m-[10%]" onClick={handleLogin} >
            {loading ? "loading ..." : "Login"}
            {user.currentUser ? <Navigate to="/myparcels" /> : ""}
          </button>
          
          {error && <span style={{color:'red'}}>Please ensure that your staff ID and password are entered correctly before attempting to log in. Double-check your credentials and try again.</span>}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
