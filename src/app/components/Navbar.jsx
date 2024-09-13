import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-full  bg-[#EAE8E2]">
        <div className="container h-[97px] mx-auto flex items-center justify-between">
          <div className="">
            <Image
              src="/images/header_logo.png"
              alt="logo"
              height={57}
              width={134}
            />
          </div>
          <div>
            <ul className="flex gap-[60px]">
              <li className=" font-semibold text-[18px] leading-[27px] cursor-pointer">
                Home
              </li>
              <li className=" font-semibold text-[18px] leading-[27px] cursor-pointer">
                About
              </li>
              <li className=" font-semibold text-[18px] leading-[27px] cursor-pointer">
                Product
              </li>
              <li className=" font-semibold text-[18px] leading-[27px] cursor-pointer">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[25px]">
              <Image
                src="/images/search_icon.png"
                className=" cursor-pointer w-[24px] h-[24px] "
                alt="search_icon"
                height={24}
                width={24}
              />
              <div className=" h-7 w-[2px] bg-[#7B6E62] opacity-35"></div>
              <Image
                src="/images/cart_icon.png"
                className=" cursor-pointer w-[24.68px] h-[23.99px]"
                alt="search_icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
