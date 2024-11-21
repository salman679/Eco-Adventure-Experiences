import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function DynamicTitle() {
  const location = useLocation();

  useEffect(() => {
    // Define a mapping of routes to titles
    const titleMap = {
      "/": "Home - My App",
      "/about": "About Us - My App",
      "/contact": "Contact Us - My App",
      "/dashboard": "Dashboard - My App",
    };

    // Set the document title based on the current path
    document.title = titleMap[location.pathname] || "My App";
  }, [location]);

  return null; // No UI, just handles the title update
}
