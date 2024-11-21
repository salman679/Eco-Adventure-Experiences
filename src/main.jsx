import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import "animate.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Route.jsx";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { ToastContainer } from "react-toastify";
import DynamicTitle from "./components/DynamicTitle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ToastContainer />
      {/* <DynamicTitle /> */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
