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
        "https://ams-a80r.onrender.com/create-attendence",
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

  const [attendances, setAttendances] = useState(null);

  const fetchAllAttendance = async () => {
    try {
      const response = await axios.get(
        "https://ams-a80r.onrender.com/get-all-attendence"
      );
      setAttendances(response.data.data);
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Unable to fetch all attendance");
    }
  };

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  const deleteAttendance = async (_id) => {
    try {
      await axios.delete(
        `https://ams-a80r.onrender.com/delete-attendence/${_id}`
      );
      toast.success("Deleted Successfully");
      fetchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-20 px-4 mt-24">
      {/* Attendance Create Form */}
      <form
        onSubmit={createattendance}
        className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 space-y-6"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Create Attendance
        </h2>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Full Name
          </label>
          <input
            required
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            id="fullName"
            placeholder="Enter full name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-600 mb-1"
          >
            Entry Time
          </label>
          <input
            required
            value={time}
            onChange={(event) => setTime(event.target.value)}
            type="text"
            id="time"
            placeholder="Enter entry time"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-md font-medium transition"
          >
            Submit
          </button>
        </div>
      </form>

      {/* Attendance Table */}
      <div className="max-w-3xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
          Attendance Records
        </h3>

        {attendances && attendances.length > 0 ? (
          attendances.map((eachAttendance, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-md p-3"
            >
              <div className="flex items-center gap-6 text-gray-700">
                <span className="font-semibold">{index + 1}.</span>
                <span>{eachAttendance.fullname}</span>
                <span className="text-sm text-gray-500">{eachAttendance.time}</span>
              </div>
              <button
                onClick={() => deleteAttendance(eachAttendance._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No attendance records found.</p>
        )}
      </div>
    </div>
  );
}
