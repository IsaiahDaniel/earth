import React from "react";
import { TfiFacebook } from "react-icons/tfi";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#B97BF4] p-5 py-20 text-white">
      <div className="w-[60%] mx-auto">
        <div className="flex items-center justify-between border-b">

          <ul className="flex justify-between items-center space-x-8">
            <li>Mobile App</li>
            <li>Community</li>
            <li>Road Map</li>
          </ul>

          <ul className="flex justify-between items-center">
            <li>
              <img src={require("../../assets/logo.png")} alt="" />
            </li>
          </ul>

          <ul className="flex justify-between items-center space-x-8">
            <li>Contact</li>
            <li>Blog</li>
            <li>White Paper</li>
          </ul>
        </div>

        <div className="flex items-center justify-between w-[40%] mx-auto mt-10">
          <TfiFacebook size={24} />
          <BsInstagram size={24} />
          <AiOutlineTwitter size={24} />
          <FaDiscord size={24} />
          <FaTiktok size={24} />
          <BsYoutube size={24} />
        </div>

        <p className="text-center mt-10">Earth inc &copy; 2023</p>

      </div>
    </div>
  );
};

export default Footer;
