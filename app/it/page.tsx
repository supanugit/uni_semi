"use client";

import axios from "axios";
import { useEffect, useState } from "react";

// Define the data type you're expecting from the API
type ClassItem = {
  _id: string;
  time: string;
  day: string;
  subject: string;
  floor: string;
  className: string;
  building: string;
  hall: string;
  __v: number;
};

export default function Home() {
  const [fdata, setFdata] = useState<ClassItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_FETCH_URL}/api?dep=it`
        );
        setFdata(res.data.classDetails);
        console.log("Fetched class data:", res.data.classDetails);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 p-6">
      {loading ? (
        <div className="text-gray-500 text-lg">Loading...</div>
      ) : fdata.length > 0 ? (
        <div className="w-full max-w-4xl space-y-4">
          {fdata.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
              <h2 className="text-xl font-semibold">{item.subject}</h2>
              <p>Class Name: {item.className}</p>
              <p>Time: {item.time}</p>
              <p>Day: {item.day}</p>
              <p>Building: {item.building}</p>
              <p>Hall: {item.hall}</p>
              <p>Floor: {item.floor}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gray-500 text-lg">No class data available</div>
      )}
    </div>
  );
}
