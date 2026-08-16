import logo from "@/assets/logo.png";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/instagram.png";
import youtube from "@/assets/youtube.png";
import { Link } from "react-router";
const Footer = () => {
  const footerLinks = [
    {
      title: "Support",
      links: [
        "Getting Started",
        "FAQS",
        "Help Articles",
        "Report an issue",
        "Contact Help Desk",
      ],
    },
    {
      title: "Services",
      links: [
        "Booking appointments",
        "Online consultations",
        "Prescriptions",
        "Medicine Refills",
        "Medical Notes",
      ],
    },
    {
      title: "Legal",
      links: [
        "Terms & Conditions",
        "Privacy Policy",
        "Cookie Notice",
        "Cookie Preferences",
        "Trust Center",
      ],
    },
  ];
  return (
    <div className=" bg-primary/8 px-10 md:px-15 lg:px-25 pt-18 pb-6 flex flex-col gap-8">
      <div className="w-full flex flex-wrap md:flex-nowrap gap-5">
        <div className="items-start flex flex-col w-full md:w-[30%]">
          <img src={logo} alt="sheefa logo" className="w-22.5 h-23 mb-2" />
          <h1 className="text-[42px] font-semibold text-primary-800 capitalize">
            Shefaa
          </h1>

          <span className="text-neutral-500 text-sm w-full md:w-[60%] mt-5">
            Experience personalized medical care from the comfort of your home.
          </span>
        </div>
        {footerLinks.map(({ title, links }) => (
          <div key={title} className="w-full md:w-[23%]">
            <h3 className="my-4 text-primary font-bold">{title}</h3>

            {links.map((link) => (
              <p
                className="my-4 text-sm text-neutral-500 cursor-pointer hover:text-primary hover:font-semibold transition-all duration-200"
                key={link}
              >
                {link}
              </p>
            ))}
          </div>
        ))}
      </div>
      <div className="bg-primary-200 rounded-lg h-[0.5px] w-full"></div>
      <div className="w-full flex-wrap gap-5 flex justify-between items-center ">
        <div className="flex items-center gap-5">
          <img
            className=" transition-transform duration-300 hover:scale-115 cursor-pointer "
            src={facebook}
            alt="facebook icon"
          />
          <img
            className="transition-transform duration-300 hover:scale-115 cursor-pointer "
            src={instagram}
            alt="instagram icon"
          />
          <img
            className="transition-transform duration-300 hover:scale-115 cursor-pointer "
            src={youtube}
            alt="youtube icon"
          />
        </div>
        <p className="text-sm">
          Shefaa 2026 © All Rights Reserved by{" "}
          <a
            href="https://mohamed-badr-portfolio.vercel.app/"
            target="_blank"
            className="text-primary font-bold underline block md:inline"
            rel="noopener noreferrer"
          >
            Eng Mohamed Badr
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
