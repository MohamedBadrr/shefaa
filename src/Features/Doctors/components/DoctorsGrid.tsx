import type { PublicDoctor } from "@/Features/Auth/@types";
import DoctorCard from "./DoctorCard";

const DoctorsGrid = ({ doctors }: { doctors: PublicDoctor[] }) => (
  <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
    {doctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)}
  </div>
);

export default DoctorsGrid;
