import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AllContext";

export default function Login() {
  const { setUser, signInUser, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");

    signInUser(email, password)
      .then((res) => {
        setUser(res.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError({ ...error, login: err.code });
      });
  }

  function handleGoogleLogin() {
    googleSignIn()
      .then((result) => {
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-8 bg-white shadow-lg rounded-lg">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
              required
            />
            {error?.login && (
              <p className="text-red-500 text-sm mt-2">{error.login}</p>
            )}
          </div>
          <div className="mb-4 flex justify-end">
            <Link
              to={`/auth/forget-password?email=${encodeURIComponent(email)}`}
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
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
        <p className="mt-6 text-center text-gray-600">
          Don’t have an account?{" "}
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
