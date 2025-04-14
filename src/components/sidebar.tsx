"use client";

import Link from "next/link";
import { Map, Rss, History, Users } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="fixed h-[calc(100vh-64px)] w-20 bg-[#103A5E] shadow-md flex flex-col">
      <nav className="flex-1 p-2">
        <ul className="space-y-4 mt-2">
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
  );
}
