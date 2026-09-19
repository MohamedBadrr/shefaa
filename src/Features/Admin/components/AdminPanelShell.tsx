import type { ReactNode } from "react";

const AdminPanelShell = ({ children }: { children: ReactNode }) => (
  <section className="rounded-2xl border border-primary-100 bg-white p-5 shadow-[0_18px_42px_rgba(0,132,212,0.07)]">
    {children}
  </section>
);

export default AdminPanelShell;
