import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";

function App() {
  const Layout = () => {
    return (
      <div className="flex flex-col">
        <Navbar />

        <div className="flex">
          <div className="w-[20%]">
            <Menu />
          </div>

          <div className="w-[80%]">
            <Outlet />
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/parcels",
          element: <Parcels />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
