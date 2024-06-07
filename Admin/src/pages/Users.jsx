import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { publicRequest } from "../requestMethods";
import { useEffect } from "react";
import { useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);

  const columns = [
    { field: "fullname", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "age", headerName: "Age", width: 100 },
    { field: "country", headerName: "Country", width: 150 },
    { field: "role", headerName: "Role", width: 150 },

    {
      field: "delete",
      headerName: "Delete",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <FaTrash
              className="text-red-500 cursor-pointer m-[10px]"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await publicRequest.get("/users");
        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await publicRequest.delete(`/users/${id}`);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

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
      <DataGrid
        rows={users}
        columns={columns}
        getRowId={(row) => row._id}
        disableSelectionOnClick
        pageSize={10}
        checkboxSelection
      />
    </div>
  );
};

export default Users;
