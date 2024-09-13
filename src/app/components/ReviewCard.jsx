import Image from "next/image";
import React from "react";

const ReviewCard = ({ index }) => {
  return (
    <>
      <div className=" relative" key={index}>
        <div className="w-[395px] h-[320px]  bg-white rounded-[10px]">
          <div className="flex justify-center ">
            {[1, 2, 3, 4, 5].map((item, key) => {
              return (
                <>
                  <span
                    className="start"
                    key={key}
                    style={{
                      cursor: "pointer",
                      color: "#FFC107",
                      fontSize: `33px`,
                    }}
                  >
                    ★
                  </span>
                </>
              );
            })}
          </div>
          <div className="mt-[30px]">
            <h6 className="font-poppins text-center font-medium italic text-[18px] leading-[27px] text-[#171717] px-5">
              “I actually had to hunt down the AirBNB we stayed at to find this
              mattress. We had tried 3 others and they couldn't compete...I'd
              pay double for this bed. “
            </h6>
            <h3 className="font-libre-franklin text-center font-extrabold text-[20px] leading-[24.24px] text-[#171717] px-5 mt-6">
              Karie
            </h3>
            <p className="font-poppins text-center font-normal text-[15px] leading-[22.5px] text-[#171717] px-5 mt-[6px]">
              Port Charlotte, Florida
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/girl_icon.png"
            alt="bed_layer"
            className="w-fit h-fit -mt-[40px]"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
