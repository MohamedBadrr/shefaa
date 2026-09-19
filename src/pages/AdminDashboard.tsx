import { useState } from "react";
import AdminAppointmentsPanel from "@/Features/Admin/appointments/components/AdminAppointmentsPanel";
import AdminDepartmentsPanel from "@/Features/Admin/departments/components/AdminDepartmentsPanel";
import AdminDoctorsPanel from "@/Features/Admin/doctors/components/AdminDoctorsPanel";
import AdminPendingDoctorsPanel from "@/Features/Admin/pending request/components/AdminPendingDoctorsPanel";
import AdminSidebar, {
  type AdminPanelKey,
} from "@/Features/Admin/components/AdminSidebar";
import AdminUsersPanel from "@/Features/Admin/users/components/AdminUsersPanel";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const panels: Record<AdminPanelKey, React.ReactNode> = {
  doctors: <AdminDoctorsPanel />,
  pendingDoctors: <AdminPendingDoctorsPanel />,
  departments: <AdminDepartmentsPanel />,
  appointments: <AdminAppointmentsPanel />,
  users: <AdminUsersPanel />,
};

const AdminDashboard = () => {
  const [activePanel, setActivePanel] = useState<AdminPanelKey>("doctors");

  return (
    <SidebarProvider className="bg-primary-50/35">
      <AdminSidebar activePanel={activePanel} onPanelChange={setActivePanel} />
      <SidebarInset>
        <main className="min-h-screen px-5 py-6 md:px-8 lg:px-10">
          <div className="mb-5 flex items-center">
            <SidebarTrigger />
          </div>
          {panels[activePanel]}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminDashboard;
