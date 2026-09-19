import {
  CalendarCheck,
  ClipboardList,
  FolderKanban,
  LayoutDashboard,
  Stethoscope,
  UsersRound,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

export type AdminPanelKey =
  | "doctors"
  | "pendingDoctors"
  | "departments"
  | "appointments"
  | "users";

const adminNavItems = [
  { key: "doctors", label: "Doctors", icon: Stethoscope },
  { key: "pendingDoctors", label: "Pending requests", icon: ClipboardList },
  { key: "departments", label: "Departments", icon: FolderKanban },
  { key: "appointments", label: "Appointments", icon: CalendarCheck },
  { key: "users", label: "Users", icon: UsersRound },
] satisfies {
  key: AdminPanelKey;
  label: string;
  icon: typeof Stethoscope;
}[];

const AdminSidebar = ({
  activePanel,
  onPanelChange,
}: {
  activePanel: AdminPanelKey;
  onPanelChange: (panel: AdminPanelKey) => void;
}) => (
  <Sidebar collapsible="icon" className="border-primary-100 bg-white">
    <SidebarHeader className="border-b border-primary-100 p-5 group-data-[collapsible=icon]:border-b-0 group-data-[collapsible=icon]:p-2">
      <div className="flex items-center gap-3 group-data-[collapsible=icon]:justify-center">
        <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
          <LayoutDashboard size={21} />
        </span>
        <div className="group-data-[collapsible=icon]:hidden">
          <p className="text-[13px] font-extrabold text-neutral-900">
            Admin workspace
          </p>
          <p className="mt-1 text-[11px] font-medium text-neutral-400">
            Manage Shefaa operations
          </p>
        </div>
      </div>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Operations</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {adminNavItems.map(({ key, label, icon: Icon }) => (
              <SidebarMenuItem key={key}>
                <SidebarMenuButton
                  type="button"
                  isActive={activePanel === key}
                  className="text-[13px] font-bold cursor-pointer!"
                  onClick={() => onPanelChange(key)}
                  tooltip={label}
                >
                  <Icon size={17} />
                  <span>{label}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarRail />
  </Sidebar>
);

export default AdminSidebar;
