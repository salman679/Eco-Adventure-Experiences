import { useEffect, useState } from "react";
import { AdventureCard } from "../components/AdventureCard";

const AdventureSection = () => {
  const [adventures, setAdventures] = useState();

  useEffect(() => {
    fetch("adventure.json")
      .then((res) => res.json())
      .then((res) => setAdventures(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Adventure Experiences
        </h1>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {adventures?.map((adventure) => (
            <AdventureCard
              key={adventure.id}
              adventure={adventure}
              //   isLoggedIn={isLoggedIn}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdventureSection;
