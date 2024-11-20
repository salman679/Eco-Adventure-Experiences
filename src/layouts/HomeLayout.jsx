import EcoAdventureBenefits from "../components/EcoAdventureBenefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import AdventureSection from "../pages/AdventureSection";

export default function HomeLayout() {
  const isLoggedIn = true; // Replace with actual authentication state
  const user = {
    name: "John Doe",
    photo: "https://via.placeholder.com/150", // Replace with actual user photo
  };

  return (
    <>
      <Header isLoggedIn={isLoggedIn} user={user} />
      <Slider />
      <AdventureSection />
      <EcoAdventureBenefits />
      <Testimonials />
      <Footer />
    </>
  );
}
