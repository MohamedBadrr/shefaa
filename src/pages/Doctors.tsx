import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import WrapperComponent from "@/components/ui/WrapperComponent";
import { Button } from "@/components/ui/button";
import DoctorsDirectory from "@/Features/Doctors/components/DoctorsDirectory";

const Doctors = () => (
  <main>
    <WrapperComponent className="py-4 md:py-8">
      <DoctorsDirectory />
      <Button nativeButton={false} variant="ghost" className="mt-10" render={<Link to="/" />}>
        <ArrowLeft /> Back home
      </Button>
    </WrapperComponent>
  </main>
);

export default Doctors;
