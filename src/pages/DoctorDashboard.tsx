import DoctorSidebar from "@/Features/DoctorDashboard/components/DoctorSidebar";
import { useDoctorAppointments } from "@/Features/DoctorDashboard/hooks/useDoctorAppointments";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { CalendarDays, Clock3 } from "lucide-react";
import { formatDate } from "@/lib/date";

const DoctorDashboard = () => {
  const { data: appointments, isLoading, isError } = useDoctorAppointments();

  return (
    <div className="">
      <SidebarProvider className=" flex-col lg:flex-row">
        <DoctorSidebar />

        <SidebarInset className="min-w-0 ">
          <main className="min-w-0 flex-1 px-5 md:px-8 lg:px-10">
            <div className="mb-4 flex items-center">
              <SidebarTrigger />
            </div>
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-[12px] font-extrabold tracking-[0.16em] text-primary-600 uppercase">
                  Doctor dashboard
                </p>
                <h1 className="mt-2 text-[30px] font-extrabold text-neutral-900 md:text-[38px]">
                  Your appointments
                </h1>
                <p className="mt-2 text-[13px] font-medium text-neutral-500">
                  Keep track of your upcoming patient visits in one place.
                </p>
              </div>
              <div className="flex size-12 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                <CalendarDays size={23} aria-hidden="true" />
              </div>
            </div>

            <section id="appointments" className="mt-8">
              {isLoading && (
                <div className="space-y-3">
                  {Array.from({ length: 3 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-22 animate-pulse rounded-lg border border-primary-100 bg-white"
                    />
                  ))}
                </div>
              )}

              {isError && (
                <div className="rounded-lg border border-red-200 bg-white p-6 text-sm font-semibold text-red-500">
                  We could not load your appointments right now.
                </div>
              )}

              {!isLoading && !isError && appointments?.length === 0 && (
                <div className="rounded-lg border border-primary-200 bg-white p-10 text-center">
                  <div className="mx-auto flex size-12 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                    <CalendarDays size={22} aria-hidden="true" />
                  </div>
                  <h2 className="mt-4 text-[18px] font-extrabold text-neutral-900">
                    No appointments yet
                  </h2>
                  <p className="mt-2 text-[13px] font-medium text-neutral-500">
                    Your upcoming appointments will appear here.
                  </p>
                </div>
              )}

              {!isLoading && !isError && Number(appointments?.length) > 0 && (
                <div className="space-y-3">
                  {appointments?.map((appointment) => (
                    <article
                      key={appointment.id}
                      className="grid gap-4 rounded-lg border border-primary-100 bg-white p-5 shadow-[0_8px_22px_rgba(0,132,212,0.05)] md:grid-cols-[1.2fr_1fr_1fr_auto] md:items-center"
                    >
                      <div>
                        <p className="text-[12px] font-extrabold tracking-[0.12em] text-primary-600 uppercase">
                          Patient
                        </p>
                        <p className="mt-1 text-[14px] font-bold text-neutral-800">
                          {appointment.patient_id}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-neutral-600">
                        <CalendarDays size={16} className="text-primary-600" />
                        {formatDate(appointment.appointment_date)}
                      </div>
                      <div className="flex items-center gap-2 text-[13px] font-semibold text-neutral-600">
                        <Clock3 size={16} className="text-primary-600" />
                        {appointment.time_slot}
                      </div>
                      <span className="w-fit rounded-full bg-primary-50 px-3 py-1 text-[11px] font-extrabold capitalize text-primary-700">
                        {appointment.status}
                      </span>
                    </article>
                  ))}
                </div>
              )}
            </section>
          </main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default DoctorDashboard;
