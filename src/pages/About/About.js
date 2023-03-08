import React from "react";

import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";

const About = () => {
  return (
    <>
      <header className="bg-showcase">
        <Navbar />
        <section className="w-full md:w-[60%] mx-auto text-white mt-[10rem]">
          <div className="text-center">
            <h2 className="text-6xl md:text-[8rem] font-[Brightwall] text-white mb-20 md:mb-40 leading-[200px]">
              The revolution the art world is yet to see
            </h2>
          </div>
        </section>
      </header>
      <main>
        <div className="mt-[200px] p-10 text-white">
          <div className="w-full md:w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-0">
            <div className="mt-7 w-full md:w-1/2">
              <h2 className="font-[brightwall] text-[#B97BF4] text-7xl mb-10">
                Vision
              </h2>
              <div className="mt-30 text-3xl text-center md:text-justify text-black leading-10">
                to let the world know that art is for everyone irrespective of
                their artistic or creative experience, background and more and
                is seen in everything. To be a force that brings them into that
                future where art thrives.
              </div>
            </div>

            <div className="flex">
              <img
                src={require("../../assets/About/about1.png")}
                alt=""
                className="h-[600px] w-[500px]"
              />
            </div>
          </div>

          <div className="w-full md:w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-0">
            <div className="flex">
              <img
                src={require("../../assets/About/about2.png")}
                alt=""
                className="h-[600px] w-[500px]"
              />
            </div>
            <div className="mt-7 w-full md:w-1/2">
              <h2 className="font-[brightwall] text-[#B97BF4] text-7xl mb-10">
                The Mission
              </h2>
              <div className="mt-30 text-3xl text-center md:text-justify text-black leading-10">
                to let the world know that art is for everyone irrespective of
                their artistic or creative experience, background and more and
                is seen in everything. To be a force that brings them into that
                future where art thrives!!!!!!.
              </div>
            </div>
          </div>
          
        </div>


        <div className="md:w-[90%] mx-auto  mt-10">
          <h2 className="text-5xl text-center font-[brightwall] mb-10">Meet The Team</h2>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5 p-5">
            <div>
              <img src={require("../../assets/About/team-1.png")} alt="" />
            </div>

            <div>
              <img src={require("../../assets/About/team-1.png")} alt="" />
            </div>

            <div>
              <img src={require("../../assets/About/team-1.png")} alt="" />
            </div>
          </div>  
        </div> 

  

        <div className="mt-[200px] p-10 bg-[#B97BF4]">
          <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center md:justify-between">
            <div className="flex mt-[-100px]">
              <img
                src={require("../../assets/newsletter.png")}
                alt=""
                className="md:h-[600px] md:w-[500px]"
              />
            </div>

            <div className="mt-7 w-full md:w-1/2">
              <div className="mt-30 md:text-3xl text-black leading-10 mb-4">
                Join our weekly news letter so you don’t miss out on any of our
                lastest update
              </div>
              <div>
                <Input placeholder="First name" />
                <Input placeholder="Email" />
                <Button text="Join Us" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
