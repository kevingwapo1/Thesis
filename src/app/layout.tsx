import "./globals.css"; // ✅ Don't forget this

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Header always on top */}
        <Header />

        {/* Page content: sidebar + main area */}
        <div className="flex mt-[64px]"> {/* Added mt-[64px] to push content below header */}
          <Sidebar />
          <main className="ml-20 flex-1 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
