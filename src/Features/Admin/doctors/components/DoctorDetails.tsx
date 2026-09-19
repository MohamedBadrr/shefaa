import { mapStatus } from "@/lib/mapStatus";
import AdminDetailsGrid from "../../components/AdminDetailsGrid";
import type { AdminDoctor } from "../@types/adminDoctor";

const DoctorDetails = ({ doctor }: { doctor: AdminDoctor }) => (
  <AdminDetailsGrid
    items={[
      { label: "Email", value: doctor.email },
      { label: "Department", value: doctor.departmentName },
      { label: "Degree", value: doctor.degree },
      { label: "Fee", value: `$${doctor.fee}` },
      { label: "Years", value: String(doctor.yearsOfExperience) },
      { label: "Rating", value: String(doctor.rating) },
      { label: "Reviews", value: String(doctor.reviewsCount) },
      { label: "Approval", value: mapStatus(doctor.approvalStatus).label },
      {
        label: "Availability",
        value: mapStatus(doctor.isAvailable ? "available" : "unavailable").label,
      },
      { label: "Description", value: doctor.description },
    ]}
  />
);

export default DoctorDetails;
