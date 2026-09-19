import DoctorAppointmentsSection from "@/Features/DoctorDashboard/components/DoctorAppointmentsSection";
import DoctorDashboardHeader from "@/Features/DoctorDashboard/components/DoctorDashboardHeader";
import DoctorOverviewSection from "@/Features/DoctorDashboard/components/DoctorOverviewSection";
import DoctorSidebar from "@/Features/DoctorDashboard/components/DoctorSidebar";
import DoctorTimesSection from "@/Features/DoctorDashboard/components/DoctorTimesSection";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const DoctorDashboard = () => (
  <SidebarProvider className="flex-col lg:flex-row">
    <DoctorSidebar />
    <SidebarInset className="min-w-0">
      <main className="min-w-0 flex-1 px-5 py-5 md:px-8 lg:px-10">
        <div className="mb-5 flex items-center"><SidebarTrigger /></div>
        <DoctorDashboardHeader />
        <DoctorOverviewSection />
        <DoctorAppointmentsSection />
        <DoctorTimesSection />
      </main>
    </SidebarInset>
  </SidebarProvider>
);

export default DoctorDashboard;
