import Image from "next/image";
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
const TouchCard = ({ addBG = true }) => {
  return (
    <>
      <div className=" container mx-auto mt-[100px]">
        <div>
          <h1 className="text-center font-libre-franklin font-extrabold text-[44px] leading-[53.33px]">
            Get In Touch With Us
          </h1>
          <div className="flex justify-center px-16 gap-[3.5rem] mt-[70px] relative">
            <div
              className={`w-[390px] h-[281px] flex flex-col     ${
                addBG
                  ? "bg-[#EAE8E2] rounded-[10px] bottom-gradient-shadow "
                  : null
              }`}
            >
              <div className="w-[80px] h-[80px] mx-auto mt-[34px] rounded-[10px] bg-custom-gradient2 flex justify-center items-center ">
                <FaPhoneAlt className="w-[49px] h-[49px] text-white" />
              </div>
              <h2 className=" font-extrabold text-[28px] leading-[33.94px] text-center mt-[35px]">
                Phone
              </h2>
              <p
                className={`px-[28px] mt-[17px] ${
                  addBG ? "text-[#171717]" : "text-white"
                }  font-normal text-[20px] leading-[30px] font-poppins text-center`}
              >
                1-888-425-4854
              </p>
            </div>
            <div
              className={`w-[390px] h-[281px] flex flex-col     ${
                addBG
                  ? "bg-[#EAE8E2] rounded-[10px] bottom-gradient-shadow "
                  : null
              }`}
            >
              <div className="w-[80px] h-[80px] mx-auto mt-[34px] rounded-[10px] bg-custom-gradient2 flex justify-center items-center ">
                <MdEmail className="w-[49px] h-[49px] text-white" />
              </div>
              <h2 className=" font-extrabold text-[28px] leading-[33.94px] text-center mt-[35px]">
                Email
              </h2>
              <p
                className={`px-[28px] mt-[17px] ${
                  addBG ? "text-[#171717]" : "text-white"
                }  font-normal text-[20px] leading-[30px] font-poppins text-center`}
              >
                returns@Tuftzysleep.com
              </p>
            </div>
            <div
              className={`w-[390px] h-[281px] flex flex-col     ${
                addBG
                  ? "bg-[#EAE8E2] rounded-[10px] bottom-gradient-shadow "
                  : null
              }`}
            >
              <div className="w-[80px] h-[80px] mx-auto mt-[34px] rounded-[10px] bg-custom-gradient2 flex justify-center items-center ">
                <IoLocationSharp className="w-[49px] h-[49px] text-white" />
              </div>
              <h2 className=" font-extrabold text-[28px] leading-[33.94px] text-center mt-[35px]">
                Location
              </h2>
              <p
                className={`px-[28px] mt-[17px] ${
                  addBG ? "text-[#171717]" : "text-white"
                }  font-normal text-[20px] leading-[30px] font-poppins text-center`}
              >
                No: 58 A, East Madison Street, Baltimore, MD, USA 4508
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouchCard;
