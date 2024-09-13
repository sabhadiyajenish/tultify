import Image from "next/image";
import React from "react";

const BannerSection = () => {
  return (
    <>
      <hr className="w-full h-[2px]  bg-[#C7C1C2]" />
      <div className="bg-[#EAE8E2] w-full">
        <div className="container mx-auto h-fit ">
          <div className="flex justify-between items-center">
            <div className="w-[715px] mt-[80px]">
              <h1 className="font-libre-franklin text-[60px] font-extrabold leading-[72.72px]">
                Experience Sleep Innovation : <br className="mt-0" /> All Fresh,
                All Luxe!
              </h1>

              <p className="font-poppins text-[26px] font-normal leading-[40px] pr-4 mt-[36px]">
                Five Years of Dreamy Comfort: Celebrate with an Extraordinary
                20% Off!
              </p>
            </div>
            <div className=" mt-[80px] mb-[78px]">
              <Image
                src="/images/sofa.png"
                alt="sofa.png"
                className="w-[777px] h-fit"
                width={0}
                height={0}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
