import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AllContext";
import { toast } from "react-toastify";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("User logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <>
      {/* Navbar */}
      <header className="navbar bg-base-100">
        {/* Navbar Start */}
        <div className="navbar-start">
          <button
            className="btn btn-ghost lg:hidden"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <Link to={"/"} className="flex items-center gap-2">
            <img className="rounded-full h-10 w-10" src={logo} alt="logo" />
            <h5 className="font-bold text-lg">Eco Adventure</h5>
          </Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium text-lg">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {user && (
              <>
                <li>
                  <Link to={"/dashboard/myProfile"}>Profile</Link>
                </li>
                <li>
                  <Link to={"/dashboard/update-profile"}>Update Profile</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src={user?.photoURL || "https://i.pravatar.cc/150?img=1"}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard/myProfile">Profile</Link>
                </li>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/auth/login">
              <button className="btn btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-lg transform transition-transform duration-300 ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          className="absolute cursor-pointer top-5 right-5 btn btn-ghost"
          onClick={() => setShowSidebar(false)}
        >
          ✕
        </button>
        <div className="p-4">
          <ul className="menu menu-vertical space-y-4 font-medium">
            <li className="cursor-pointer">
              <Link to="/" onClick={() => setShowSidebar(false)}>
                Home
              </Link>
            </li>
            {user && (
              <>
                <li>
                  <Link
                    to="/dashboard/myProfile"
                    onClick={() => setShowSidebar(false)}
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <Link to={"/dashboard/update-profile"}>Update Profile</Link>
                </li>
              </>
            )}
            {!user && (
              <li>
                <Link to="/auth/login" onClick={() => setShowSidebar(false)}>
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Sidebar Overlay */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
};

export default Header;
