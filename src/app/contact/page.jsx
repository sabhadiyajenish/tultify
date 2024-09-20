"use client";
import dynamic from "next/dynamic";
import React from "react";
import SubHeader from "../components/about/SubHeader";
import TouchCard from "../components/contact/TouchCard";
import ProjectDetail from "../components/contact/ProjectDetail";
import Help_Deciding from "../components/home/Help_Deciding";
import Footer from "../components/common/Footer";
const MapCard = dynamic(() => import("../components/contact/MapCard"), {
  ssr: false,
});
const Contact = () => {
  return (
    <div>
      <SubHeader title="Contact Us" />
      <div>
        <TouchCard />
      </div>
      <div className="w-full h-[600px] mt-[100px]">
        <MapCard />
      </div>
      <div className="mt-[100px]">
        <ProjectDetail />
      </div>
      <div className="mt-[100px]">
        <Help_Deciding />
      </div>
      <div className="mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
