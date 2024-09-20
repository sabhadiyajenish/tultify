import Image from "next/image";
import React from "react";

const ProjectDetail = () => {
  return (
    <>
      <div className=" container mx-auto mb-[100px]">
        <div className=" flex justify-center">
          <div className="w-[1240px] h-[812px] rounded-[10px] shadow-customBoxShadow px-[53px] py-[70px]">
            <h1 className="text-center font-libre-franklin font-extrabold text-[40px] leading-[48.48px] ">
              Let’s Talk About Your Project
            </h1>

            <div className="mt-[60px] w-full flex gap-x-5">
              <div className="w-1/2">
                <Image
                  src="/images/contact/project_card_image.png"
                  alt="project_card_image"
                  className="w-[522px] h-[541px]"
                  width={0}
                  height={0}
                  sizes="100vw"
                />
              </div>
              <div className="w-1/2">
                <div>
                  <p className=" font-poppins font-semibold text-[18px] leading-[27px]">
                    First Name
                  </p>
                  <input
                    type="text"
                    className="w-full border border-[#7B6E62] py-4 px-4 rounded-[10px]"
                    placeholder="Enter your name..."
                  />
                </div>
                <div className="mt-5">
                  <p className=" font-poppins font-semibold text-[18px] leading-[27px]">
                    Email
                  </p>
                  <input
                    type="email"
                    className="w-full border border-[#7B6E62] py-4 px-4 rounded-[10px]"
                    placeholder="Enter your email..."
                  />
                </div>
                <div className="mt-5">
                  <p className=" font-poppins font-semibold text-[18px] leading-[27px]">
                    Phone No
                  </p>
                  <input
                    type="number"
                    className="w-full border border-[#7B6E62] py-4 px-4 rounded-[10px]"
                    placeholder="Enter your Phone no..."
                  />
                </div>
                <div className="mt-5">
                  <p className=" font-poppins font-semibold text-[18px] leading-[27px]">
                    Message
                  </p>
                  <textarea
                    type="number"
                    className="w-full border border-[#7B6E62] py-4 px-4 rounded-[10px]"
                    placeholder="Enter your Message..."
                    rows={3}
                  />
                </div>
                <div className="flex justify-between">
                  <button className="w-[160px] mt-10 h-[55px] bg-[#7B6E62] text-white font-poppins font-medium text-[18px] leading-[27px]">
                    Submit
                  </button>
                  <div className="p-0 overflow-hidden mt-[-8px]">
                    <Image
                      src="/images/contact/fool_stand_image.png"
                      alt="fool_stand_image"
                      className="w-[84px] h-[243px] -mt-[50px] "
                      width={0}
                      height={0}
                      sizes="100vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetail;
