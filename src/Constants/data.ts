  import type {
  AboutStat,
  AboutValue,
  ContactFormValues,
  ContactInfoItem,
  Department,
  Testimonial,
  TestimonialStat,
} from "@/@types";
import {
  Award,
  Bone,
  CalendarDays,
  ClipboardPlus,
  Clock3,
  Eye,
  FileText,
  HeartHandshake,
  HeartPulse,
  Mail,
  MapPin,
  MessageSquareText,
  Pill,
  Phone,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
  export const TopServicesData = [
    {
      title: "Online Consultations",
      description:
        "Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation.",
      Icon: MessageSquareText,
      className: "lg:min-h-[200px]",
    },
    {
      title: "Booking Appointments",
      description:
        "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features.",
      Icon: CalendarDays,
      className: "lg:min-h-[200px]",
    },
  ];

  export const BottomServicesData = [
    {
      title: "Prescriptions",
      description:
        "Receive and renew prescriptions digitally after your consultation with our specialists .",
      Icon: FileText,
      className: "lg:min-h-[185px]",
    },
    {
      title: "Medical Notes",
      description:
        "Obtain necessary medical notes for work or school with only a few clicks of hassle.",
      Icon: ClipboardPlus,
      className: "lg:min-h-[185px]",
    },
    {
      title: "Medicine Refills",
      description:
        "Skip the pharmacy queues and save time + energy by ordering medicine refills online.",
      Icon: Pill,
      className: "lg:min-h-[185px]",
    },
  ];

  
export const testimonialsData: Testimonial[] = [
  {
    name: "Linda A.",
    quote:
      "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
    avatarLabel: "LA",
    avatarClassName: "from-primary-100 via-white to-primary-300 text-primary-800",
  },
  {
    name: "Henry B.",
    quote:
      "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.",
    avatarLabel: "HB",
    avatarClassName: "from-primary-200 via-[#ffe2d3] to-[#d56a45] text-primary-900",
  },
  {
    name: "Joshua T.",
    quote:
      "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free.",
    avatarLabel: "JT",
    avatarClassName: "from-primary-950 via-[#5d4f92] to-[#f4b2d1] text-white",
  },
  {
    name: "Samantha K.",
    quote:
      "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.",
    avatarLabel: "SK",
    avatarClassName: "from-[#f6dfbc] via-primary-100 to-primary-600 text-primary-950",
  },
];

export const testimonialStatsData: TestimonialStat[] = [
  {
    value: 10000,
    suffix: "+",
    label: "Successful Consultations",
  },
  {
    value: 2500,
    suffix: "+",
    label: "Healthcare Professionals",
  },
  {
    value: 98,
    suffix: "%",
    label: "Patient Satisfaction Rate",
  },
  {
    value: 200,
    suffix: "+",
    label: "Top Specialists",
  },
];

export const departmentsData: Department[] = [
  {
    name: "Internal Medicine",
    description:
      "Comprehensive care for adults, from routine checkups to long-term health management.",
    Icon: Stethoscope,
  },
  {
    name: "Ophthalmology",
    description:
      "Specialized eye care for vision health, diagnosis, treatment, and follow-up.",
    Icon: Eye,
  },
  {
    name: "Cardiology",
    description:
      "Heart-focused consultations for prevention, monitoring, and personalized care plans.",
    Icon: HeartPulse,
  },
  {
    name: "Orthopedics",
    description:
      "Bone, joint, and movement care designed to help you recover and stay active.",
    Icon: Bone,
  },
];

export const aboutStatsData: AboutStat[] = [
  {
    value: "24/7",
    label: "Digital care access",
  },
  {
    value: "10k+",
    label: "Successful consultations",
  },
  {
    value: "98%",
    label: "Patient satisfaction",
  },
];

export const aboutValuesData: AboutValue[] = [
  {
    title: "Trusted Specialists",
    description:
      "We connect patients with licensed doctors across focused medical departments.",
    Icon: Award,
  },
  {
    title: "Patient-first Care",
    description:
      "Every visit, prescription, and follow-up is designed around comfort and clarity.",
    Icon: HeartHandshake,
  },
  {
    title: "Secure Experience",
    description:
      "Your medical journey stays private, protected, and simple from start to finish.",
    Icon: ShieldCheck,
  },
  {
    title: "Fast Support",
    description:
      "Our team keeps help close whenever you need guidance with your healthcare.",
    Icon: Clock3,
  },
];

export const contactInfoData: ContactInfoItem[] = [
  {
    title: "Call us",
    value: "+20 100 000 0000",
    description: "Speak with our support team",
    Icon: Phone,
  },
  {
    title: "Email us",
    value: "support@shefaa.com",
    description: "Send us your question anytime",
    Icon: Mail,
  },
  {
    title: "Visit us",
    value: "Cairo, Egypt",
    description: "Digital care with local support",
    Icon: MapPin,
  },
];

export const contactFormInitialValues: ContactFormValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};
