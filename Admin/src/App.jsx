import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import Parcels from "./pages/Parcels";
import Users from "./pages/Users";
import NewParcel from "./pages/NewParcel";
import NewUsers from "./pages/NewUsers";
import Parcel from "./pages/Parcel";
import Login from "./pages/Login";

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
        
        {
          path: "/users",
          element: <Users />,
        },
        
        {
          path: "/newparcel",
          element: <NewParcel />,
        },
        {
          path: "/newuser",
          element: <NewUsers />,
        },
        {
          path: "/parcel/:id",
          element: <Parcel />,
        },
      ],
     
    },
    {
      path: "/login",
      element: <Login />,
    },

  
  ]);

  return <RouterProvider router={router} />;
}

export default App;
