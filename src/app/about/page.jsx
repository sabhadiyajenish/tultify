import React from "react";
import SubHeader from "../components/about/SubHeader";
import AboutusCom from "../components/about/AboutusCom";
import BackSuperCard from "../components/about/BackSuperCard";
import Warranty from "../components/about/Warranty";
import AwardWinning from "../components/about/AwardWinning";
import Image from "next/image";
import Help_Deciding from "../components/home/Help_Deciding";
import Footer from "../components/common/Footer";

const About = () => {
  return (
    <div className=" box-border p-0 m-0">
      <SubHeader title="About" />
      <AboutusCom />
      <BackSuperCard
        mainTitle=" If you try your Tuftzy for 365 days and decide to return it..."
        title_1="Call Us at 1-888-425-4854 within your 365-night trial or email returns@Tuftzysleep.com"
        title_2="Tuftzy will help you find a local donation centre for your mattress."
        title_3="Tuftzy will send you a refund, in whatever form you paid for it.  "
      />
      <Warranty />
      <AwardWinning />
      <div className="mt-[140px]">
        <div className="flex justify-center items-center gap-x-[63px]">
          <Image
            src="/images/store_map.png"
            alt="store_map"
            className="w-[789px] h-[424px]"
            width={0}
            height={0}
            sizes="100vw"
          />
          <div className="w-[420px]">
            <h1 className="text-[44px] font-extrabold  leading-[53.33px]  text-[#171717]">
              Try us in person at 4,365 stores
            </h1>
            <button className="bg-[#7B6E62] w-[289px] h-[55px] text-white mt-[50px] text-[18px] leading-[27px] font-medium">
              Find a store Near You
            </button>
          </div>
        </div>
      </div>
      <div className="">
        <BackSuperCard
          addBG={false}
          mainTitle="Trusted by 5.5 Million American Sleepers*"
          backImage="about_back_reverse_bed"
          title_1="Tuftzy customers would recommend Tuftzy to their family and friends.**"
          title_2="Said their Tuftzy mattress helped reduce overall aches, stiffness, soreness, and/or discomfort.**
"
          title_3="Back pain sufferers said their Tuftzy mattress helped some or a lot.**"
        />
      </div>
      <div className="mt-[189px]">
        <Help_Deciding />
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default About;
