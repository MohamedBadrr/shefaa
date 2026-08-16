import HealNetStory from "@/Features/Home/components/HealNetStory";
import HelpDeskSupport from "@/Features/Home/components/HelpDeskSupport";
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
      <HelpDeskSupport />
    </div>
  );
};

export default Home;
