import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (!user) {
    navigate("/auth/login");
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Welcome, {user.displayName || "User"}!
          </h1>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-6">
            <div className="flex-shrink-0 rounded-full w-32 h-32">
              <img
                src={
                  user.photoURL ||
                  "https://via.placeholder.com/150?text=No+Profile+Picture"
                }
                alt={user.displayName || "User"}
                className="w-full h-full rounded-full shadow-md"
              />
            </div>
            <div className="w-full">
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">Name:</p>
                <p className="text-gray-600">{user.displayName || "N/A"}</p>
              </div>
              <div className="mb-4">
                <p className="text-lg font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">{user.email || "N/A"}</p>
              </div>
              <div className="flex justify-end">
                <Link
                  to={`/dashboard/update-profile?name=${user.displayName}&photoUrl=${user.photoURL}`}
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
                >
                  Update Profile
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProfile;
