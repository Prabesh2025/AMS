import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

export default function AttendenceCard() {
  const [fullName, setFullName] = useState("");
  const [time, setTime] = useState("");
  const [attendances, setAttendances] = useState(null);

  const createattendance = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://ams-a80r.onrender.com/create-attendence", {
        fullname: fullName,
        time: time,
      });
      toast.success("Attendance Created Successfully");
      setFullName("");
      setTime("");
      fetchAllAttendance();
    } catch (error) {
      console.log("Something went wrong", error);
      toast.error("Failed to take Attendance");
    }
  };

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

  useEffect(() => {
    fetchAllAttendance();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-violet-100 py-16 px-4 mt-24">
      {/* Attendance Create Form */}
      <motion.form
        onSubmit={createattendance}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-violet-700">
          Create Attendance
        </h2>

        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray-700 mb-1"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div>
          <label
            htmlFor="time"
            className="block text-sm font-semibold text-gray-700 mb-1"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg font-semibold shadow transition duration-300"
          >
            Submit
          </button>
        </div>
      </motion.form>

      {/* Attendance Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto mt-14 bg-white rounded-2xl shadow-xl p-6"
      >
        <h3 className="text-2xl font-semibold text-violet-700 mb-6 border-b pb-2">
          Attendance Records
        </h3>

        {attendances && attendances.length > 0 ? (
          <>
            {/* Header Row */}
            <div className="hidden sm:flex items-center justify-between px-4 py-2 bg-gray-100 border border-gray-200 rounded-lg mb-4 font-semibold text-gray-600">
              <div className="flex gap-4 w-full">
                <span className="w-6">#</span>
                <span className="flex-1">Full Name</span>
                <span className="w-32 text-center">Time</span>
                <span className="w-24 text-right">Action</span>
              </div>
            </div>

            <AnimatePresence>
              {attendances.map((eachAttendance, index) => (
                <motion.div
                  key={eachAttendance._id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 mb-3 shadow-sm"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-gray-700 w-full">
                    <span className="font-semibold w-6">{index + 1}.</span>
                    <span className="flex-1 text-lg">{eachAttendance.fullname}</span>
                    <span className="text-sm text-gray-500 w-32 text-center">
                      {eachAttendance.time}
                    </span>
                    <div className="w-24 text-right">
                      <button
                        onClick={() => deleteAttendance(eachAttendance._id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-1.5 rounded-md text-sm font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </>
        ) : (
          <p className="text-center text-gray-500">No attendance records found.</p>
        )}
      </motion.div>
    </div>
  );
}
