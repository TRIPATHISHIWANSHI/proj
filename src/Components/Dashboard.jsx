import React from "react";
const Dashboard = () => {
    return (
  <div className="ml-64 p-5 w-[calc(100%-250px)] bg-white min-h-screen">
  <div className="bg-black text-white p-5 text-center text-lg rounded mb-5">Fleet Management Dashboard</div>
  <div className="grid grid-cols-2 gap-5">
  <div className="p-5 border border-gray-300 rounded text-center font-bold cursor-pointer hover:bg-black hover:text-yellow-400">Vehicle Tracking</div>
  <div className="p-5 border border-gray-300 rounded text-center font-bold cursor-pointer hover:bg-black hover:text-yellow-400">Driver Management</div>
  </div>
  <button className="block w-full p-3 mt-5 bg-black text-white rounded cursor-pointer hover:bg-yellow-400 hover:text-black">Manage Fleet</button>
  </div>
    );
  };
  export default Dashboard;