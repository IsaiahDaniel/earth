import React from "react";
import { Header } from "../../components";

import "./home.css";

const Home = () => {
  return (
    // <div className='bg-gradient-to-b from-[#B97BF4] to-[#212121]'>
    //   <Header />
    // </div>
    <div>
      <Header />
      <main>
        <div className="bg-gradient-to-b from-[rgba(0,0,0,0.9)] to-[#B97BF4] p-5">
          <div className="w-[60%] mx-auto py-10 pb-96">
            <h2 className="text-center text-6xl text-white font-[Brightwall] mb-24">
              Building a community
            </h2>
            <p className="text-white leading-10">
              For live auctions and exhibitions, we are developing an online
              sales room. We facilitate the exchange of artwork between
              collectors and artists, as well as assist in creating a curated
              market for indie artists, Commission Free. In order to do this, we
              use a platform that links the webs 2 and 3 to create opportunities
              for artists.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mt-[-200px]">
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="flex mr-40">
              <img
                src={require("../../assets/discover-1.png")}
                alt=""
                className="h-[600px] w-[500px]"
              />
              <img
                src={require("../../assets/discover-2.png")}
                alt=""
                className="h-[400px] w-[300px] mt-28 ml-[-180px]"
              />
            </div>

            <div className="mt-72">
              <div>
                <h3 className="text-5xl mb-20">Check Out Our</h3>
                <h2 className="text-8xl font-[Brightwalll]">DISCOVERED.</h2>
              </div>
              <br /> <br />
              <div className="mt-30 leading-7">
                Admist the chaos of colors that surrounds the art world.
                Credible artists are pushed up from beneath the noise and
                DISCOVERED.
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[200px] bg-[#B97BF4] p-10 text-white">
          <h3 className="text-5xl text-center font-[Brightwall] mb-9">Our nft market place</h3>
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="mt-7 w-1/2">    
              <div className="mt-30 text-3xl leading-10">
                Our NFT Project will have certain functionalities on our
                platform to promote art and its trade and will be our means of
                giving back to our world, especially women and children in
                distress
              </div>
            </div>

            <div className="flex">
              <img
                src={require("../../assets/nft-1.png")}
                alt=""
                className="h-[600px] w-[500px]"
              />
              <img
                src={require("../../assets/nft-2.png")}
                alt=""
                className="h-[400px] w-[300px] mt-28 ml-[-180px]"
              />
            </div>
          </div>
        </div>

        <div className="mt-[200px] p-10 text-white">
          <h3 className="text-5xl text-center font-[Brightwall] text-[#B97BF4] mb-9">Connect with Galleries</h3>
          <div className="w-[90%] mx-auto flex items-center justify-between">
            <div className="mt-7 w-1/2">    
              <div className="mt-30 text-3xl text-black leading-10">
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
      </main>
    </div>
  );
};

export default Home;
