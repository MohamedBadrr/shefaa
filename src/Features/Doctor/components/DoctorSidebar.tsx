import {
  CalendarDays,
  LayoutDashboard,
  Stethoscope,
} from "lucide-react";
import { NavLink, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const DoctorSidebar = () => {
  const { pathname, hash } = useLocation();

  return (
    <Sidebar collapsible="offcanvas" className="border-primary-100 bg-white">
      <SidebarHeader className="border-b border-primary-100 p-5">
        <div className="flex items-center gap-3">
          <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
            <Stethoscope size={21} aria-hidden="true" />
          </span>
          <div>
            <p className="text-[13px] font-extrabold text-neutral-900">
              Doctor workspace
            </p>
            <p className="mt-1 text-[11px] font-medium text-neutral-400">
              Manage your care schedule
            </p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname === "/doctor/dashboard" && !hash}
                  render={<NavLink to="/doctor/dashboard" />}
                  className="text-[13px] font-bold"
                >
                  <LayoutDashboard size={17} aria-hidden="true" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={pathname === "/doctor/dashboard" && hash === "#appointments"}
                  render={<NavLink to="/doctor/dashboard#appointments" />}
                  className="text-[13px] font-bold"
                >
                  <CalendarDays size={17} aria-hidden="true" />
                  <span>Appointments</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <p className="px-2 py-2 text-[11px] font-medium text-neutral-400">
          More doctor tools are coming soon.
        </p>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DoctorSidebar;
