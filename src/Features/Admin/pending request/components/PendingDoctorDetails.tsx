import { Button } from "@/components/ui/button";
import AdminDetailsGrid from "../../components/AdminDetailsGrid";
import AdminDialog from "../../components/AdminDialog";
import type { AdminDoctor } from "../../doctors/@types/adminDoctor";

const PendingDoctorDetails = ({ doctor }: { doctor: AdminDoctor }) => (
  <AdminDialog
    title={`Dr. ${doctor.firstName} ${doctor.lastName}`}
    description="Doctor request full data"
    trigger={
      <Button type="button" variant="outline" size="sm">
        View data
      </Button>
    }
  >
    <AdminDetailsGrid
      items={[
        { label: "Email", value: doctor.email },
        { label: "Department", value: doctor.departmentName },
        { label: "Degree", value: doctor.degree },
        { label: "Fee", value: `$${doctor.fee}` },
        { label: "Years", value: String(doctor.yearsOfExperience) },
        { label: "Phone", value: doctor.phoneNumber },
        { label: "Age", value: doctor.age },
        { label: "Address", value: doctor.address },
        { label: "Description", value: doctor.description },
      ]}
    />
  </AdminDialog>
);

export default PendingDoctorDetails;
