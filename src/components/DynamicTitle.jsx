import React from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
  const location = useLocation(); // Call useLocation within the component

  React.useEffect(() => {
    // Set the document title based on the current route
    document.title = `${location.pathname} - My App`;
  }, [location]);

  return null; // This component doesn't render anything, it only sets the title
};

export default DynamicTitle;
