import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="px-6 py-3 w-full  rounded-lg text-purple-500 bg-purple-100">
      <div className="max-w-screen-xl mx-auto text-sm md:text-base flex flex-wrap justify-center md:justify-between gap-2 md:gap-4">
        <div className="flex items-center justify-start">
          EliteAppMakers Nela
        </div>
        <div className="flex text-center items-center justify-end gap-x-2 sm:gap-x-3 text-purple-500">
          <Link
            className="text-purple-500"
            href="https://nela.eliteappmakers.in/privacy-policy"
          >
            Privacy Policy
          </Link>
          <Link
            className="text-purple-500"
            href="https://nela.eliteappmakers.in/terms-and-conditions"
          >
            Terms and Conditions
          </Link>
          <Link className="text-purple-500" href="https://nela.eliteappmakers.in/contact-us">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
