import React from "react";
import { FaChartBar, FaUser } from "react-icons/fa";

const stats = [
  { label: "Active Projects", value: "8", icon: <FaChartBar className="text-secondary" /> },
  { label: "Users", value: "125", icon: <FaUser className="text-primary" /> },
];
const Dashboard = () => (
  <section className="section-padding max-w-4xl mx-auto">
    <h1 className="text-4xl font-bold text-primary mb-8">Client Dashboard</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {stats.map(({ label, value, icon }) => (
        <div key={label} className="card flex items-center">
          <div className="mr-4">{icon}</div>
          <div>
            <div className="text-2xl font-bold">{value}</div>
            <div className="text-gray-500">{label}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="card">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <ul className="text-gray-600">
        <li className="mb-2">✔️ New project “Tinykola ERP” started (Oct 2025)</li>
        <li className="mb-2">✔️ Last invoice paid (Sep 2025)</li>
        <li className="mb-2">✔️ “Web Design Sprint” completed (Aug 2025)</li>
      </ul>
    </div>
  </section>
);

export default Dashboard;
