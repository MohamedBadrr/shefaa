import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminDoctor } from "../../doctors/@types/adminDoctor";
import DoctorApprovalStatusBadge from "./DoctorApprovalStatusBadge";
import PendingDoctorActions from "./PendingDoctorActions";
import PendingDoctorDetails from "./PendingDoctorDetails";

const PendingDoctorsTable = ({ doctors }: { doctors: AdminDoctor[] }) => (
  <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>Doctor</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Degree</TableHead>
          <TableHead>Experience</TableHead>
          <TableHead>Fee</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Details</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {doctors.map((doctor) => (
          <TableRow key={doctor.id} className="border-primary-100 hover:bg-primary-50/40 [&_td]:p-4">
            <TableCell>
              <p className="font-extrabold text-neutral-900">
                Dr. {doctor.firstName} {doctor.lastName}
              </p>
              <p className="text-xs font-semibold text-neutral-500">
                {doctor.email}
              </p>
            </TableCell>
            <TableCell>{doctor.departmentName}</TableCell>
            <TableCell>{doctor.degree}</TableCell>
            <TableCell>{doctor.yearsOfExperience} years</TableCell>
            <TableCell>${doctor.fee}</TableCell>
            <TableCell>
              <DoctorApprovalStatusBadge status={doctor.approvalStatus} />
            </TableCell>
            <TableCell>
              <PendingDoctorDetails doctor={doctor} />
            </TableCell>
            <TableCell className="text-right">
              <PendingDoctorActions doctorId={doctor.id} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default PendingDoctorsTable;
