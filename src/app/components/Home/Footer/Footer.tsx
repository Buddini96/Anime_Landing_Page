import React from "react";
import { FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { FaClock, FaEnvelope } from "react-icons/fa6";

function Footer() {
  const footerData = [
    {
      title: "About Us",
      links: [
        "Support Center",
        "Customer Center",
        "About Us",
        "Copyright",
        "Careers",
      ],
    },
    {
      title: "Our Information",
      links: [
        "Return Policy",
        "Privacy Policy",
        "Terms & Conditions",
        "Community Guidelines",
        "Content Policies",
      ],
    },
  ];

  return (
    <div className="py-10 bg-white">
      <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold">
              Ani
              <span className="text-xl md:text-2xl text-[#E93306] font-extrabold">
                Flix
              </span>
            </h1>
            <p className="mt-4 text-sm font-medium leading-[2rem] w-[80%] text-gray-600">
              Stay connected with your favorite anime! Follow us for updates,
              exclusive content, and more.
            </p>
          </div>

          {/* Footer sections */}
          {footerData.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-800">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>{link}</li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Contact Info</h3>
            <ul className="mt-4 space-y-4 text-sm font-semibold text-gray-500">
              <li className="flex items-center">
                <FaMapMarkedAlt className="mr-2"/>
                Amasterdam, Netharlands
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-2"/>
                +01 12346 2356
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2"/>
                7 Days - 8am - 10am
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2"/>
                anime.example@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-5 borrder-t pt-8 flex flex-col md:flex-row justify-center items-center text-black text-sm">
          <p className="text-center font-medium">Copyright © 2024 AniFlix. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
