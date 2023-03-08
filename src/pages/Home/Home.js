import React from "react";
import { Header } from "../../components";

import Input from "../../components/input/Input";
import Button from "../../components/Button/Button";
import "./home.css";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#B97BF4] p-5">
          <div className="w-full md:w-[60%] container mx-auto py-10">
            <h2 className="text-center text-6xl text-white font-[Brightwall] mb-24">
              Building a community
            </h2>
            <p className="text-white text-center md:text-justify leading-10">
              For live auctions and exhibitions, we are developing an online
              sales room. We facilitate the exchange of artwork between
              collectors and artists, as well as assist in creating a curated
              market for indie artists, Commission Free. In order to do this, we
              use a platform that links the webs 2 and 3 to create opportunities
              for artists.
            </p>
          </div>
        </div>

        <div className="mt-[200px]">
          <div className="w-full md:w-[90%] mx-auto md:flex md:flex-row pl-3">
            <div className="flex mr-40 items-center justify-center">
              <img
                src={require("../../assets/discover-1.png")}
                alt=""
                className="h-[550px] md:h-[600px] md:w-[500px] mx-auto object-cover ml-36"
              />
              <img
                src={require("../../assets/discover-2.png")}
                alt=""
                className="h-[390px] w-full md:w-[400px] mt-20 ml-[-180px]"
                />
            </div>
            {/* ml-[40%] mr-[40%] flex justify-end */}

            <div className="text-center md:text-justify mt-10">
              <div>
                <h3 className="text-2xl md:text-5xl md:mb-20">Check Out Our</h3>
                <h2 className="text-3xl md:text-8xl font-[Brightwalll]">DISCOVERED.</h2>
              </div>
              <br /> 
              <div className="md:mt-30 leading-7 p-3">
                Admist the chaos of colors that surrounds the art world.
                <br />
                Credible artists are pushed up from beneath the noise and
                DISCOVERED.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[200px] bg-[#B97BF4] py-10 md:p-10 text-white">
          <h3 className="text-2xl md:text-5xl text-center font-[Brightwall] mb-9">
            Our nft market place
          </h3>
          <div className="w-full md:w-[90%] mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="mt-7 w-full md:w-1/2">
              <div className="mt-30 md:text-3xl text-center md:text-justify leading-10 p-8">
                Our NFT Project will have certain functionalities on our
                platform to promote art and its trade and will be our means of
                giving back to our world, especially women and children in
                distress
              </div>
            </div>

            <div className="flex w-full md:w-1/2">
              <img
                src={require("../../assets/nft-1.png")}
                alt=""
                className="h-[400px] w-[300px] md:h-[600px] md:w-[500px] ml-0"
              />
              <img
                src={require("../../assets/nft-2.png")}
                alt=""
                className="h-[200px] w-[200px] md:h-[400px] md:w-[300px] mt-52 object-contain md:mt-28 ml-[-180px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[200px] p-10 text-white">
          <h3 className="text-5xl text-center font-[Brightwall] text-[#B97BF4] mb-9">
            Connect with Galleries
          </h3>
          <div className="w-full md:w-[90%] mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-10 md:px-0">
            <div className="mt-7 w-full md:w-1/2">
              <div className="mt-30 text-3xl text-center md:text-justify text-black leading-10">
                Our NFT Project will have certain functionalities on our
                platform to promote art and its trade and will be our means of
                giving back to our world, especially women and children in
                distress
              </div>
            </div>

            <div className="flex">
              <img
                src={require("../../assets/galleries.png")}
                alt=""
                className="h-[600px] w-[500px]"
              />
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

export default Home;
