import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AllContext";
import { toast } from "react-toastify";

const Header = () => {
  const { logout, user } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("User logged out successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header className="w-11/12 mx-auto pt-5">
      <div className="navbar justify-between bg-base-100">
        <Link to={"/"} className="flex gap-2">
          <img className="rounded-full h-10 w-10" src={logo} alt="logo" />
          <h5 className="font-bold text-lg">Eco Adventure</h5>
        </Link>
        <ul className="flex gap-2 font-medium text-lg">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          {user && (
            <li>
              <Link to={"/dashboard/myProfile"}>Dashboard</Link>
            </li>
          )}
        </ul>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          {user ? (
            <div
              className="dropdown dropdown-end "
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL || "https://i.pravatar.cc/150?img=1"}
                  />
                </div>
              </div>

              {showDropdown && (
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
              )}
            </div>
          ) : (
            <Link to="/auth/login">
              <button className="btn btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
