import EcoAdventureBenefits from "../components/EcoAdventureBenefits";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Testimonials from "../components/Testimonials";
import AdventureSection from "../pages/AdventureSection";

export default function HomeLayout() {
  return (
    <>
      <Header />
      <Slider />
      <AdventureSection />
      <EcoAdventureBenefits />
      <Testimonials />
      <Footer />
    </>
  );
}
