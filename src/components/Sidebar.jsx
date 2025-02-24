import React, { useState } from "react";
import { Home, Settings, Users, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {/* Hamburger Menu Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-indigo-600 text-white rounded-md shadow-lg"
        onClick={toggleSidebar}
      >
        <Menu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed h-full md:static inset-y-0 left-0 w-64 bg-white shadow-lg overflow-y-auto transition-all duration-300 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        <div className="p-6">
          {/* Logo or Branding */}
          <div className="flex items-center justify-center mb-8">
            <span className="text-2xl font-bold text-indigo-600">Student Curd</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            <Link
              to="/"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200 ${
                location.pathname === "/" ? "bg-indigo-50 text-indigo-600" : ""
              }`}
            >
              <Home className="mx-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/add-students"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200 ${
                location.pathname === "/add-students"
                  ? "bg-indigo-50 text-indigo-600"
                  : ""
              }`}
            >
              <Users className="mx-5" />
              <span>Add Students</span>
            </Link>
            <Link
              to="/settings"
              className={`flex items-center px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-colors duration-200 ${
                location.pathname === "/settings"
                  ? "bg-indigo-50 text-indigo-600"
                  : ""
              }`}
            >
              <Settings className="mx-5" />
              <span>Settings</span>
            </Link>
          </nav>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0  bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;