import {
  CalendarDays,
  CircleDollarSign,
  MessageSquareText,
  Star,
} from "lucide-react";

type DoctorOverviewStatsProps = {
  totalAppointments: number;
  totalMoney: number;
  reviewsCount: number;
  rating: number;
};

const DoctorOverviewStats = ({
  totalAppointments,
  totalMoney,
  reviewsCount,
  rating,
}: DoctorOverviewStatsProps) => {
  const stats = [
    {
      label: "Total appointments",
      value: totalAppointments.toString(),
      icon: <CalendarDays />,
    },
    {
      label: "Total earnings",
      value: `$${totalMoney.toFixed(2)}`,
      icon: <CircleDollarSign />,
    },
    {
      label: "Total reviews",
      value: reviewsCount.toString(),
      icon: <MessageSquareText />,
    },
    {
      label: "Doctor rating",
      value: `${rating.toFixed(1)} / 5`,
      icon: <Star fill="currentColor" />,
    },
  ];

  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-primary-100 bg-white p-5 shadow-[0_8px_22px_rgba(0,132,212,0.05)]"
        >
          <div className="flex items-center justify-between">
            <span className="flex size-10 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
              {stat.icon}
            </span>
            <p className="text-2xl font-extrabold text-neutral-900">
              {stat.value}
            </p>
          </div>
          <p className="mt-4 text-xs font-bold text-neutral-500">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DoctorOverviewStats;
