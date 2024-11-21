import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const DynamicTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      "/": "Home - Adventure App",
      "/auth/login": "Login - Adventure App",
      "/auth/register": "Register - Adventure App",
      "/auth/forget-password": "Forget Password - Adventure App",
      "/dashboard/myProfile": "My Profile - Adventure App",
      "/dashboard/update-profile": "Update Profile - Adventure App",
      "/dashboard": "Dashboard - Adventure App",
      "/adventures/:id": "Adventure Details - Adventure App",
    };

    const matchingRoute = Object.keys(routeTitles).find((route) => {
      const regex = new RegExp(`^${route.replace(/:\w+/g, "\\w+")}$`);
      return regex.test(location.pathname);
    });

    document.title = matchingRoute
      ? routeTitles[matchingRoute]
      : "Adventure App - Not Found";
  }, [location.pathname]);

  return null;
};

export default DynamicTitle;
