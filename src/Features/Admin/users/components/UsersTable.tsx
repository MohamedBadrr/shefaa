import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AdminUser } from "../@types/adminUser";
import UserActions from "./UserActions";
import UserIdentity from "./UserIdentity";
import UserRoleBadge from "./UserRoleBadge";

const UsersTable = ({ users }: { users: AdminUser[] }) => (
  <div className="overflow-hidden rounded-xl border border-primary-100 bg-white">
    <Table>
      <TableHeader className="bg-primary-50 [&_th]:px-4 [&_th]:py-3 [&_th]:text-primary-700">
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Phone number</TableHead>
          <TableHead>Address</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id} className="border-primary-100 hover:bg-primary-50/40 [&_td]:p-4">
            <TableCell><UserIdentity user={user} /></TableCell>
            <TableCell><UserRoleBadge role={user.role} /></TableCell>
            <TableCell className="tabular-nums"><span dir="ltr">{user.phoneNumber || "N/A"}</span></TableCell>
            <TableCell className="max-w-sm whitespace-normal">{user.address || "N/A"}</TableCell>
            <TableCell className="text-right"><UserActions user={user} /></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default UsersTable;
