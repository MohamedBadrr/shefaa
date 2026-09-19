import type { DoctorTime } from "../@types/doctorTimes";
import DoctorTimeCard from "./DoctorTimeCard";

const DoctorTimesList = ({ times }: { times: DoctorTime[] }) => (
  <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
    {times.map((time) => <DoctorTimeCard key={time.id} time={time} />)}
  </div>
);

export default DoctorTimesList;
