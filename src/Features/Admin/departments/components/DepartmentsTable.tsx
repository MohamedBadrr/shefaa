import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminDepartment } from "../@types/adminDepartment";
import DepartmentActions from "./DepartmentActions";
import DepartmentStatusBadge from "./DepartmentStatusBadge";

const DepartmentsTable = ({ departments }: { departments: AdminDepartment[] }) => (
  <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {departments.map((department) => (
          <TableRow key={department.id} className="border-primary-100 hover:bg-primary-50/40 [&_td]:p-4">
            <TableCell className="font-extrabold text-neutral-900">
              {department.name}
            </TableCell>
            <TableCell className="min-w-48 max-w-md whitespace-normal">
              <span className="line-clamp-2 text-neutral-600">
                {department.description}
              </span>
            </TableCell>
            <TableCell>
              <DepartmentStatusBadge isActive={department.isActive} />
            </TableCell>
            <TableCell className="text-right">
              <DepartmentActions department={department} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default DepartmentsTable;
