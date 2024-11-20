import React from "react";

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          What Our Adventurers Say
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Adventurer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 text-lg mb-4">
              "This trek through the Himalayas was truly unforgettable. The
              guides were knowledgeable, and the views were out of this world! I
              felt connected to nature in a way I never have before."
            </p>
            <p className="text-center font-semibold text-gray-800">
              Alice Johnson
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://i.pravatar.cc/150?img=5"
              alt="Adventurer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 text-lg mb-4">
              "I loved how the adventure was eco-friendly, and we learned so
              much about local culture. Everything was thoughtfully planned, and
              I had the best time of my life!"
            </p>
            <p className="text-center font-semibold text-gray-800">
              John Smith
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <img
              src="https://i.pravatar.cc/150?img=7"
              alt="Adventurer"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 text-lg mb-4">
              "The trek was challenging, but it was worth every step. The
              eco-friendly approach made me feel good about the impact I was
              leaving behind. Highly recommend this trip!"
            </p>
            <p className="text-center font-semibold text-gray-800">Sarah Lee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
