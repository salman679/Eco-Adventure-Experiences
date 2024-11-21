import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";
import { toast } from "react-toastify";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../services/firebase.config";

export default function Register() {
  const { setUser, createUser, updateUserProfile, loading, googleSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters.");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must include at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must include at least one lowercase letter."
      );
    }

    createUser(email, password)
      .then((result) => {
        setUser(result.user);
        updateUserProfile({ displayName: name, photoURL: photo });
        toast.success("Account created successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        console.log(result.user);

        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="card bg-white w-full max-w-lg shadow-lg rounded-lg p-8">
        <h3 className="font-bold text-3xl text-center text-gray-700 mb-6">
          Create an Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-600">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input bg-gray-100 border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-600">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input bg-gray-100 border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input bg-gray-100 border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input bg-gray-100 border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          <button className="btn w-full bg-blue-500 text-white py-3 rounded-md font-medium hover:bg-blue-600 transition duration-300">
            Register
          </button>
        </form>
        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="btn w-full bg-gray-500 text-white py-3 rounded-md font-medium hover:bg-gray-700 transition duration-300"
          >
            Continue with Google
          </button>
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
