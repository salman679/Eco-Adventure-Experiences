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
import DynamicTitle from "../components/DynamicTitle";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <DynamicTitle />
        <HomeLayout />
      </>
    ),
  },
  {
    path: "/adventures/:id",
    element: (
      <>
        <DynamicTitle />
        <PrivateRoute>
          <DetailsPageLayout />
        </PrivateRoute>
      </>
    ),
    loader: () => fetch("/adventure.json"),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <DynamicTitle />
        <PrivateRoute>
          <DashboardLayout />
        </PrivateRoute>
      </>
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
    element: (
      <>
        <DynamicTitle />
        <AuthLayout />
      </>
    ),
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
    element: (
      <>
        <DynamicTitle />
        <NotFoundPage />
      </>
    ),
  },
]);
