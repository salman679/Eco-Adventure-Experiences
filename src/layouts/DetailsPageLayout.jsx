import { useLoaderData } from "react-router-dom";
import { AdventureCard } from "../components/AdventureCard";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AdventureDetails from "../pages/AdventureDetails";
import MyProfile from "../pages/MyProfile";

export default function DetailsPageLayout() {
  const { data } = useLoaderData();
  console.log(data);

  return (
    <>
      <Header />
      <AdventureDetails adventures={data} />

      <Footer />
    </>
  );
}
