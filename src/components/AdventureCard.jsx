import React from "react";
import { Link, useNavigate } from "react-router-dom";

const AdventureCard = ({ adventure }) => {
  const navigate = useNavigate();

  const handleExploreNow = () => {
    if (isLoggedIn) {
      navigate(`/adventures/${adventure.id}`);
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={adventure.image}
        alt={adventure.adventure_title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{adventure.adventure_title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {adventure.short_description}
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          Category: {adventure.category_name}
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          Location: {adventure.location}
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          Cost: {adventure.adventure_cost}
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          Duration: {adventure.duration}
        </p>
        <p className="text-gray-700 font-semibold mb-2">
          Level: {adventure.adventure_level}
        </p>
        <div className="mt-4">
          <h3 className="font-bold text-lg">Eco-Friendly Features:</h3>
          <ul className="text-gray-600 list-disc pl-5">
            {adventure.eco_friendly_features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <Link
          to={`/adventures/${adventure.id}`}
          onClick={handleExploreNow}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export { AdventureCard };
