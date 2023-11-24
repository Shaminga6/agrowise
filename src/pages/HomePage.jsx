import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MissionSection from "../components/MissionSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <MissionSection />
      <Footer />
    </div>
  );
};

export default HomePage;
