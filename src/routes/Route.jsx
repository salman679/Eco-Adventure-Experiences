import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailsPageLayout from "../layouts/DetailsPageLayout";
import NotFoundPage from "../components/NotFoundPage";
import PrivateRoute from "./PrivateRoute";
import MyProfile from "../pages/MyProfile";
import ForgetPassword from "../layouts/ForgetPassword";
import DashboardLayout from "../layouts/DashboardLayout";
import UpdateProfilePage from "../pages/UpdateProfile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/adventures/:id",
    element: (
      <PrivateRoute>
        <DetailsPageLayout />
      </PrivateRoute>
    ),
    loader: () => fetch("/adventure.json"),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myProfile",
        element: <MyProfile />,
      },
      {
        path: "/dashboard/update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfilePage />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
