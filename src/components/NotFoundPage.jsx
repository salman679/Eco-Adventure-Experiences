import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-700 mb-4">404</h1>
        <p className="text-lg text-gray-500 mb-6">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link
          to="/"
          className="btn bg-blue-500 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-600 transition duration-300"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
