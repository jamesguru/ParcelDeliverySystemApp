import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { FaTrash } from "react-icons/fa";
const Parcels = () => {
  const rows = [
    {
      id: 1,
      from: "North Carolina",
      weight: "2 kg",
      date: "20/04/2024",
      sender: "James Williams",
      to: "North Carolina",
      cost: "$200",
      receiver: "James Williams",
      trackId: "672946308462",
      note: "It contains fragile items should be handled with care",
    },
    {
      id: 2,
      from: "New York",
      weight: "5 kg",
      date: "22/04/2024",
      sender: "Sarah Johnson",
      to: "California",
      cost: "$350",
      receiver: "Michael Brown",
      trackId: "762938473819",
      note: "Keep dry",
    },
    {
      id: 3,
      from: "Florida",
      weight: "3 kg",
      date: "25/04/2024",
      sender: "Robert Davis",
      to: "Texas",
      cost: "$250",
      receiver: "William Wilson",
      trackId: "839203847192",
      note: "Handle with care",
    },
    {
      id: 4,
      from: "Illinois",
      weight: "4 kg",
      date: "27/04/2024",
      sender: "Emily Garcia",
      to: "Nevada",
      cost: "$280",
      receiver: "Emma Martinez",
      trackId: "928374657381",
      note: "Fragile items",
    },
    {
      id: 5,
      from: "Georgia",
      weight: "6 kg",
      date: "30/04/2024",
      sender: "David Rodriguez",
      to: "Ohio",
      cost: "$400",
      receiver: "Olivia Hernandez",
      trackId: "748291746382",
      note: "Perishable items",
    },
    {
      id: 6,
      from: "Pennsylvania",
      weight: "2.5 kg",
      date: "02/05/2024",
      sender: "Linda Lopez",
      to: "Michigan",
      cost: "$220",
      receiver: "Sophia Gonzalez",
      trackId: "827364938271",
      note: "Do not stack",
    },
    {
      id: 7,
      from: "Virginia",
      weight: "7 kg",
      date: "05/05/2024",
      sender: "James Clark",
      to: "Washington",
      cost: "$450",
      receiver: "Isabella Lee",
      trackId: "937463827364",
      note: "Fragile, handle with care",
    },
    {
      id: 8,
      from: "New Jersey",
      weight: "1.5 kg",
      date: "07/05/2024",
      sender: "Karen Young",
      to: "Massachusetts",
      cost: "$150",
      receiver: "Mia Walker",
      trackId: "928374819203",
      note: "This side up",
    },
  ];

  const columns = [
    { field: "from", headerName: "From", width: 150 },
    { field: "date", headerName: "Date", width: 120 },
    { field: "sender", headerName: "Sender", width: 150 },
    { field: "to", headerName: "To", width: 150 },
    { field: "note", headerName: "Note", width: 200 },
    {
      field: "edit",
      headerName: "Edit",
      width: 150,
      renderCell: () => {
        return (
          <>
            <Link to="/parcel/123">
            <button className="bg-teal-300  text-white cursor-pointer  w-[70px]">
              Edit
            </button>
            </Link>
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
            <FaTrash className="text-red-500 cursor-pointer m-[10px]"/>
          </>
        );
      },
    },
  ];
  return (
    <div className="m-[30px] bg-[#fff] p-[20px]">
      <div className="flex items-center justify-between">
        <h1 className="m-[20px] text-[20px]">All Parcels</h1>

       <Link to="/newparcel">
       <button className="bg-[#1E1E1E] text-white p-[10px] cursor-pointer">
          New Parcel
        </button>
       </Link>
      </div>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Parcels;
