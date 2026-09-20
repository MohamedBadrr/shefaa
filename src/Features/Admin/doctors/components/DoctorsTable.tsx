import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminDoctor } from "../@types/adminDoctor";
import DoctorActions from "./DoctorActions";
import DoctorIdentity from "./DoctorIdentity";
import DoctorStatusBadge from "./DoctorStatusBadge";

const DoctorsTable = ({ doctors }: { doctors: AdminDoctor[] }) => (
  <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>Doctor</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>Department</TableHead>
          <TableHead>Fee</TableHead>
          <TableHead>Approval</TableHead>
          <TableHead>Availability</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {doctors.map((doctor) => (
          <TableRow key={doctor.id} className="border-primary-100 hover:bg-primary-50/40 [&_td]:p-4">
            <TableCell>
              <DoctorIdentity doctor={doctor} />
            </TableCell>
            <TableCell className="tabular-nums"><span dir="ltr">{doctor.phoneNumber || "N/A"}</span></TableCell>
            <TableCell>{doctor.departmentName}</TableCell>
            <TableCell>${doctor.fee}</TableCell>
            <TableCell>
              <DoctorStatusBadge status={doctor.approvalStatus} />
            </TableCell>
            <TableCell>
              <DoctorStatusBadge status={doctor.isAvailable ? "available" : "unavailable"} />
            </TableCell>
            <TableCell className="text-right">
              <DoctorActions doctor={doctor} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default DoctorsTable;
