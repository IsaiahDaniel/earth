import React from "react";

import Navbar from "../Navbar/Navbar";
import "./header.css";

const Header = () => {
  return (
    <header className="bg-showcase">
      <Navbar />
      <section className="w-[60%] mx-auto flex-col flex items-center justify-between pt-4 text-white mt-[2rem]">
        <div className="text-center">
          <h2 className="text-[8rem] font-[Brightwall] text-white mb-20">The World of</h2>
          <h2 className="text-[8rem] font-[Brightwall] text-white">Art</h2>
        </div>
        <div className="flex items-center justify-center mt-20 space-x-7">
          <h3>Love</h3>
          <h3>Express</h3>
          <h3>Share</h3>
        </div>
      </section>
    </header>
  );
};

export default Header;
