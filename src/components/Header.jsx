import { useState } from "react";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = ({ isLoggedIn, user }) => {
  const [hover, setHover] = useState(false);

  const handleLogout = () => {
    // Implement logout functionality here
    console.log("User logged out");
  };

  return (
    <header className="w-11/12 mx-auto pt-5">
      <div className="navbar justify-between bg-base-100">
        <div className="flex gap-2">
          <img className="rounded-full h-10 w-10" src={logo} alt="logo" />
          <h5 className="font-bold text-lg">Eco Adventure</h5>
        </div>
        <ul className="flex gap-2 font-medium text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
