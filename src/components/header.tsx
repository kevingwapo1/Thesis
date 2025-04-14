"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Map,
  Rss,
  History,
  Users,
  Bell,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

export default function Sidebar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 flex justify-between items-center bg-white p-4 shadow-md z-10">
        <div className="text-xl font-bold text-[#0070c0]">Noise Monitoring</div>
        <div className="flex items-center space-x-6">
          <Bell className="w-6 h-6 text-gray-600" />
          <MessageSquare className="w-6 h-6 text-gray-600" />
          <div className="relative">
            <Users
              className="w-6 h-6 text-gray-600 cursor-pointer"
              onClick={handleDropdown}
            />
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-lg rounded-md z-10">
                <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <div className="h-screen w-20 fixed top-0 left-0 bg-[#103A5E] shadow-md flex flex-col">
        <nav className="flex-1 p-2">
          <ul className="space-y-4">
            <li>
              <Link
                href="/dashboard"
                className="flex flex-col items-center p-2 rounded-md w-full hover:bg-[#005b8f] hover:text-white transition-all duration-200"
              >
                <Map className="w-6 h-6 text-white" />
                <span className="text-xs text-white mt-1">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                href="/nodes"
                className="flex flex-col items-center p-2 rounded-md w-full hover:bg-[#005b8f] hover:text-white transition-all duration-200"
              >
                <Rss className="w-6 h-6 text-white" />
                <span className="text-xs text-white mt-1">Nodes</span>
              </Link>
            </li>
            <li>
              <Link
                href="/history"
                className="flex flex-col items-center p-2 rounded-md w-full hover:bg-[#005b8f] hover:text-white transition-all duration-200"
              >
                <History className="w-6 h-6 text-white" />
                <span className="text-xs text-white mt-1">History</span>
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className="flex flex-col items-center p-2 rounded-md w-full hover:bg-[#005b8f] hover:text-white transition-all duration-200"
              >
                <Users className="w-6 h-6 text-white" />
                <span className="text-xs text-white mt-1">Users</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
