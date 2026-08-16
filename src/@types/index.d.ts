
import type { LucideIcon } from "lucide-react";

export type Department = {
  name: string;
  description: string;
  Icon: LucideIcon;
};

export type Testimonial = {
  name: string;
  quote: string;
  avatarSrc?: string;
  avatarLabel: string;
  avatarClassName: string;
};

export type TestimonialStat = {
  value: number;
  suffix: string;
  label: string;
};
