import React from "react";
import { footerLinks, socialMedia } from "../Constants";
import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div
        className="flex justify-between
      items-start flex-wrap max-lg:flex-col"
      >
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size in Store. Get Rewards
          </p>
          <div className="flex items-center justify-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div
                key={icon.id}
                className="flex flex-row justify-center
              items-center w-10 h-10  bg-white 
              rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={30} height={20} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="flex flex-1 mt-5 justify-between
         lg:gap-10 gap-20 flex-wrap"
        >
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4
                className="text-white font-montserrat text-2xl 
              leading-norma font-medium
               mb-6"
              >
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400
                font-montserrat text-base leading-normal
                 hover:text-slate-gray 
                 cursor-pointer"
                    key={link.name}
                  >
                    <a>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between
       text-white-400 mt-24
        max-sm:flex-col max-sm:items-center"
      >
        <div
          className="flex flex-1 justify-start
          items-center gap-2 font-montserrat
           cursor-pointer"
        >
          <img
            src={copyrightSign}
            alt="copy right sign"
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
          <p
            className="font-montserrat
          cursor-pointer"
          ></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
