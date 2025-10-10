import React from "react";
import { FaChartBar, FaUser, FaRobot, FaCloud } from "react-icons/fa";

const stats = [
  { label: "Active Projects", value: "8", icon: <FaChartBar className="text-secondary" /> },
  { label: "Registered Users", value: "125", icon: <FaUser className="text-primary" /> },
  { label: "AI Models Deployed", value: "4", icon: <FaRobot className="text-accent" /> },
  { label: "Cloud Services Active", value: "3", icon: <FaCloud className="text-blue-500" /> },
];

const recentActivities = [
  { id: 1, text: '✔️ New project “Tinykola ERP” started (Oct 2025)' },
  { id: 2, text: '✔️ Last invoice paid (Sep 2025)' },
  { id: 3, text: '✔️ “Web Design Sprint” completed (Aug 2025)' },
];

const Dashboard = () => (
  <section className="section-padding max-w-5xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-8">Client Dashboard</h1>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
      {stats.map(({ label, value, icon }) => (
        <div key={label} className="card flex items-center p-6 shadow-md rounded-lg border border-gray-200">
          <div className="mr-5 text-3xl">{icon}</div>
          <div>
            <div className="text-3xl font-bold">{value}</div>
            <div className="text-gray-600">{label}</div>
          </div>
        </div>
      ))}
    </div>
    
    <div className="card p-6 shadow-md rounded-lg border border-gray-200">
      <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
      <ul className="text-gray-700 list-disc list-inside">
        {recentActivities.map(({ id, text }) => (
          <li key={id} className="mb-2">{text}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default Dashboard;
