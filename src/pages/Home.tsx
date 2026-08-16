import HealNetStory from "@/Features/Home/components/HealNetStory";
import HeroSection from "@/Features/Home/components/HeroSection";
import PatientTestimonials from "@/Features/Home/components/PatientTestimonials";
import TopServices from "@/Features/Home/components/TopServices";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopServices />
      <HealNetStory />
      <PatientTestimonials />
    </div>
  );
};

export default Home;
