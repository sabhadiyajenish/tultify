import Image from "next/image";
import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <div className="w-full bg-[#EAE8E2]">
        <div className="container h-[97px] mx-auto flex items-center justify-between">
          <div>
            <Image
              src="/images/header_logo.png"
              alt="logo"
              height={57}
              width={134}
            />
          </div>
          <div>
            <ul className="flex gap-[60px]">
              <Link
                href={"/"}
                className="font-semibold text-[18px] leading-[27px] cursor-pointer hover:bg-[#C7C1C2] hover:text-[#FFF] transition duration-300 px-2 py-1 rounded"
              >
                Home
              </Link>
              <Link
                href={"/about"}
                className="font-semibold text-[18px] leading-[27px] cursor-pointer hover:bg-[#C7C1C2] hover:text-[#FFF] transition duration-300 px-2 py-1 rounded"
              >
                About
              </Link>
              <Link
                href={"/product"}
                className="font-semibold text-[18px] leading-[27px] cursor-pointer hover:bg-[#C7C1C2] hover:text-[#FFF] transition duration-300 px-2 py-1 rounded"
              >
                Product
              </Link>
              <Link
                href={"/contact"}
                className="font-semibold text-[18px] leading-[27px] cursor-pointer hover:bg-[#C7C1C2] hover:text-[#FFF] transition duration-300 px-2 py-1 rounded"
              >
                Contact Us
              </Link>
            </ul>
          </div>
          <div>
            <div className="flex items-center gap-[25px]">
              <Image
                src="/images/search_icon.png"
                className="cursor-pointer w-[24px] h-[24px]"
                alt="search_icon"
                height={24}
                width={24}
              />
              <div className="h-7 w-[2px] bg-[#7B6E62] opacity-35"></div>
              <Image
                src="/images/cart_icon.png"
                className="cursor-pointer w-[24.68px] h-[23.99px]"
                alt="cart_icon"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full h-[2px] bg-[#C7C1C2]" />
    </div>
  );
};

export default Navbar;
