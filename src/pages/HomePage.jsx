import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import MissionSection from "../components/MissionSection";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Banner />
      <MissionSection />
    </div>
  );
};

export default HomePage;
