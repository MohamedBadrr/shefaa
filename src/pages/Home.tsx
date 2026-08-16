import HealNetStory from "@/Features/Home/components/HealNetStory";
import HelpDeskSupport from "@/Features/Home/components/HelpDeskSupport";
import HeroSection from "@/Features/Home/components/HeroSection";
import MedicalDepartments from "@/Features/Home/components/MedicalDepartments";
import PatientTestimonials from "@/Features/Home/components/PatientTestimonials";
import TopServices from "@/Features/Home/components/TopServices";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <TopServices />
      <MedicalDepartments />
      <PatientTestimonials />
      <HealNetStory />
      <HelpDeskSupport />
    </div>
  );
};

export default Home;
