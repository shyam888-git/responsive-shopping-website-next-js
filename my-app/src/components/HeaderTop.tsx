import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <div className="border-b border-gray-200 hidden sm:block ">
      <div className="container py-4">
        <div className="flex justify-between items-center">
          <div className="hidden lg:flex gap-1 lg:gap-2">
            <div className="header_top_icon_wrapper">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper">
              <FaInstagram />
            </div>
            <div className="header_top_icon_wrapper">
              <FaGithub />
            </div>
            <div className="header_top_icon_wrapper">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
