import { ReactNode } from "react";
import Sidebar from "../components/sidebar"; // Import Sidebar component

// Root Layout
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en"> {/* Ensure no extra spaces or newlines */}
      <body> {/* Ensure no extra spaces or newlines */}
        <Sidebar> {/* Your Sidebar component */}
          {children} {/* This will render the content passed to the Sidebar */}
        </Sidebar>
      </body>
    </html>
  );
}
