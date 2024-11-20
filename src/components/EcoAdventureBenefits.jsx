import React from "react";

const EcoAdventureBenefits = () => {
  return (
    <section className="bg-green-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
          Why Choose Eco-Adventures?
        </h2>
        <p className="text-center text-lg text-gray-700 mb-8">
          Eco-adventures are not only thrilling but also contribute to the
          protection of the environment and local cultures. Here are a few
          reasons to choose eco-friendly travel.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center bg-white shadow-lg p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6V2m0 0L8 6m4-4l4 4m0 12v4m0 0l4-4m-4 4l-4-4"
              />
            </svg>
            <p className="text-lg text-gray-800">
              Minimize Environmental Impact
            </p>
          </div>
          <div className="flex items-center bg-white shadow-lg p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19v-6H5V7h4V1l5 5-5 5v-4H9v6h4l-5 5-5-5h4z"
              />
            </svg>
            <p className="text-lg text-gray-800">Support Local Communities</p>
          </div>
          <div className="flex items-center bg-white shadow-lg p-6 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-green-500 mr-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 7v10m5-5H7"
              />
            </svg>
            <p className="text-lg text-gray-800">Promote Sustainable Travel</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcoAdventureBenefits;
