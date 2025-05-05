import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function AttendenceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");

  const createattendance = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/create-attendence",
        {
          fullname: fullName,
          time: time,
        }
      );
      toast.success("Attendance Created Successfully");

      setFullName("");
      setTime("");
      fetchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Failed to take Attendance");
    }
  };

  //Fetch all attendance
  const [attendances, setAttendances] = useState(null);

  const fetchAllAttendance = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/get-all-attendence"
      );
      console.log(response.data.data);
      setAttendances(response.data.data);
      // toast.success("Attendance fetch successfully");
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  //Delete Attendance

  const deleteAttendance = async (_id) => {
    try {
      const response = await axios.delete(`http://localhost:5000/delete-attendence/${_id}`)
      toast.success("Deleted Successfully")
      fetchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Delete Failed")
    }
  };

  return (
    <div>
      {/* Attendance Create Form */}
      <form
        onSubmit={createattendance}
        className="mt-40 w-4/12 mx-auto border border-gray-200 p-8 space-y-3 shadow-lg"
      >
        <div className="flex flex-col">
          <label htmlFor="fullName">Full Name</label>
          <input
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            className="border border-gray-200 outline-none px-2 py-0.5"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="time">Time</label>
          <input
            required
            value={time}
            onChange={(event) => setTime(event.target.value)}
            type="text"
            id="time"
            placeholder="Enter your entry time"
            className="border border-gray-200 outline-none px-2 py-0.5"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-violet-500 px-6 py-1.5 rounded-md text-white"
          >
            Create Attendance
          </button>
        </div>
      </form>

      {/* Attendance Table */}

      <div className="w-6/12 mx-auto shadow-xl border-2 border-gray-300   p-10 mt-8 space-y-4">

        {attendances?.map((eachAttendance, index) => (
          <div key={index} className="flex items-center justify-between shadow-sm border border-gray-200 bg-gray-50  py-1 pl-4">
            <div className="flex items-center space-x-4">
            <p>{index + 1}.</p>
            <p>{eachAttendance.fullname}</p> 
            <p>{eachAttendance.time}</p>
            

            </div>

            <p className="mr-2 "><button onClick={()=>deleteAttendance(eachAttendance._id)} className="text-white bg-red-500 px-2 py-1 text-sm font-medium cursor-pointer">Delete</button></p>

          </div>
          

           
        ))}

      </div>
    </div>
  );
}
