"use client";

import { useState, useEffect } from "react";
import Sidebar from "../_components/Sidebar";

export default function DashboardLayout({ children }) {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    // Set the initial width and handle resize events
    setInnerWidth(window.innerWidth);

    function handleResize() {
      setInnerWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="flex flex-col min-h-screen">
      {/* Sidebar - Conditional Rendering based on screen width */}
      <div className={`${innerWidth >= 1024 ? "shrink-0" : ""}`}>
        <Sidebar />
      </div>

      {/* For mobile screens, account for sticky header space */}
      <main
        className={`flex-1 transition-all duration-300 ${
          innerWidth >= 1024 ? "ml-64" : "" // Adjust padding-top for mobile sticky header
        }`}
      >
        {children}
      </main>
    </section>
  );
}
