import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AllContext";

export function UpdateProfilePage() {
  const { updateUserProfile } = useContext(AuthContext);
  const params = new URLSearchParams(window.location.search);
  const [displayName, setDisplayName] = useState(params.get("name") || "");
  const [photoUrl, setPhotoUrl] = useState(params.get("photoUrl") || "");
  const navigate = useNavigate();

  const handleUpdateProfile = async (event) => {
    event.preventDefault();

    updateUserProfile({
      displayName,
      photoURL: photoUrl,
    })
      .then(() => {
        toast.success("Profile updated successfully.");
        navigate("/dashboard/myProfile");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form
        onSubmit={handleUpdateProfile}
        className="bg-white p-8 shadow-md rounded-lg max-w-sm w-full"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Update Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="displayName">
            Name
          </label>
          <input
            type="text"
            id="displayName"
            value={displayName}
            onChange={(event) => setDisplayName(event.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="photoUrl">
            Photo URL
          </label>
          <input
            type="text"
            id="photoUrl"
            value={photoUrl}
            onChange={(event) => setPhotoUrl(event.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
}
