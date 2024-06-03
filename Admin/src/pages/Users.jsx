import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import {Link} from "react-router-dom";

const Users = () => {
    const rows = [
        {
          id: 1,
          name: "James Williams",
          email: "james.williams@example.com",
          age: 30,
          country: "USA",
          role: "Admin",
        },
        {
          id: 2,
          name: "Sarah Johnson",
          email: "sarah.johnson@example.com",
          age: 25,
          country: "Canada",
          role: "User",
        },
        {
          id: 3,
          name: "Robert Davis",
          email: "robert.davis@example.com",
          age: 35,
          country: "UK",
          role: "Moderator",
        },
        {
          id: 4,
          name: "Emily Garcia",
          email: "emily.garcia@example.com",
          age: 28,
          country: "Australia",
          role: "User",
        },
        {
          id: 5,
          name: "David Rodriguez",
          email: "david.rodriguez@example.com",
          age: 40,
          country: "Spain",
          role: "Admin",
        },
        {
          id: 6,
          name: "Linda Lopez",
          email: "linda.lopez@example.com",
          age: 32,
          country: "Mexico",
          role: "User",
        },
        {
          id: 7,
          name: "James Clark",
          email: "james.clark@example.com",
          age: 27,
          country: "Germany",
          role: "User",
        },
        {
          id: 8,
          name: "Karen Young",
          email: "karen.young@example.com",
          age: 29,
          country: "France",
          role: "Moderator",
        },
        
      ];
      
      const columns = [
        { field: "name", headerName: "Name", width: 150 },
        { field: "email", headerName: "Email", width: 200 },
        { field: "age", headerName: "Age", width: 100 },
        { field: "country", headerName: "Country", width: 150 },
        { field: "role", headerName: "Role", width: 150 },
        {
          field: "edit",
          headerName: "Edit",
          width: 150,
          renderCell: () => {
            return (
              <>
                <button className="bg-teal-300 text-white cursor-pointer w-[70px]">
                  Edit
                </button>
              </>
            );
          },
        },
        {
          field: "delete",
          headerName: "Delete",
          width: 150,
          renderCell: () => {
            return (
              <>
                <FaTrash className="text-red-500 cursor-pointer m-[10px]" />
              </>
            );
          },
        },
      ];
      
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Users</h1>

       <Link to="/newuser">
       <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
          New User
        </button>
       </Link>
      </div>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Users;
