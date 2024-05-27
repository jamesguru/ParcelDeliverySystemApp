import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="h-[80vh] flex items-center p-[50px] text-gray-300">
        <h2 className="text-3xl font-bold w-[50%] p-[30px]">SIMPLE, FAST AND RELIABLE PARCEL DELIVERY SYSTEM</h2>
        <img src="/hero.png" alt="" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
