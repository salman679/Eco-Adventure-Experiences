import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";

const AdventureDetails = () => {
  const { id } = useParams();
  const [adventure, setAdventure] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("/adventure.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedAdventure = data.find((adventure) => adventure.id === id);
        setAdventure(selectedAdventure);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);

  if (!adventure) {
    return <p className="text-center py-16">Loading adventure details...</p>;
  }

  const currentTime = moment().format("HH:mm");

  console.log(currentTime);
  console.log(
    moment(currentTime, "HH:mm").isBetween("01:00", "23:59", null, "[)")
  );

  // Handle "Talk with Expert" button click
  const handleTalkWithExpert = () => {
    if (moment(currentTime, "HH:mm").isBetween("01:00", "23:59", null, "[)")) {
      // If current time is between 10:00 AM and 8:00 PM, open Google Meet
      window.open("https://meet.google.com/", "_blank");
    } else {
      // If outside valid time, show consultation time modal
      setShowModal(true);
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2">
            <img
              src={adventure.image}
              alt={adventure.adventure_title}
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {adventure.adventure_title}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {adventure.short_description}
            </p>
            <div className="mb-4">
              <p className="text-gray-700 font-semibold">
                Category: {adventure.category_name}
              </p>
              <p className="text-gray-700 font-semibold">
                Location: {adventure.location}
              </p>
              <p className="text-gray-700 font-semibold">
                Duration: {adventure.duration}
              </p>
              <p className="text-gray-700 font-semibold">
                Cost: {adventure.adventure_cost}
              </p>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Eco-Friendly Features
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {adventure.eco_friendly_features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <h3 className="text-xl font-bold text-gray-700">
                Special Instructions
              </h3>
              <ul className="list-disc pl-5 text-gray-600">
                {adventure.special_instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300">
              Book Now
            </button>
            {/* Talk with Expert Button */}
            <button
              onClick={handleTalkWithExpert}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg mt-4 hover:bg-blue-700 transition duration-300"
            >
              Talk with Expert
            </button>
          </div>
        </div>
      </div>

      {/* DaisyUI Modal for Consultation Time */}
      <input
        type="checkbox"
        id="consultation-modal"
        className="modal-toggle"
        checked={showModal}
        onChange={() => setShowModal(!showModal)}
      />
      <label htmlFor="consultation-modal" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h2 className="text-xl font-bold mb-4">Consultation Time</h2>
          <p>
            The expert is available from 10:00 AM to 8:00 PM. Please come back
            during this time for a live consultation.
          </p>
          <div className="modal-action">
            <label htmlFor="consultation-modal" className="btn btn-primary">
              Close
            </label>
          </div>
        </label>
      </label>
    </section>
  );
};

export default AdventureDetails;
