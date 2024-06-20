import React from "react";
import Section from "./Section";
import { socials } from "../constant";

const Footer = () => {
  return (
    <div className="lg:px-16 flex sm:justify-between py-16 justify-center items-center gap-10 max-sm:flex-col" >
      <p className="text-n-4 lg:block text-white/50">
        © {new Date().getFullYear()}. All rights reserved Wilson635.
      </p>

      <ul className="flex gap-5 flex-wrap">
        {socials.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
          >
            <img src={item.iconUrl} width={16} height={16} alt={item.title} />
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
