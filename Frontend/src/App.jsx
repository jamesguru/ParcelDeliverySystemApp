import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyParcels from "./pages/MyParcels";
import Parcels from "./pages/Parcels";
import Parcel from "./pages/Parcel";
import { useSelector } from "react-redux";



function App() {
  const user = useSelector((state) => state.user);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/myparcels",
      element: user.currentUser ? <MyParcels /> : <Navigate to="/login"/>,
    },
    {
      path: "/allparcels",
      element: user.currentUser ? <Parcels /> : <Navigate to="/login"/>,
    },
    {
      path: "/parcel/:id",
      element: user.currentUser ? <Parcel /> : <Navigate to="/login"/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
