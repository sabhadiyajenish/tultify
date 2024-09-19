import Image from "next/image";
import React from "react";

const SimpleSleepDesing = ({
  orderNum = 0,
  imgUrl = "sleep_bed_1",
  mainTitle = "Cozy Cover",
  subTitle = " A buttery soft and airy knit blend helps make your mattress even cozier.",
}) => {
  return (
    <>
      <div className="w-[1066px] mx-auto mt-[30px]">
        <div className="flex items-center gap-x-[74px]">
          <Image
            src={`/images/product/${imgUrl}.png`}
            className={`w-[500px] h-[406px] order-${orderNum}`}
            alt={"sleep_bed_1"}
            height={0}
            width={0}
            sizes="100vw"
          />
          <div className="text-start order-1">
            <h3 className="font-libre-franklin font-extrabold text-[40px] leading-[48.48px] text-[#171717]">
              {mainTitle}
            </h3>
            <p className=" mt-10 font-poppins font-normal text-[20px] leading-[30px] text-[#171717] w-[492px]">
              {subTitle}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SleepCard = () => {
  return (
    <>
      <div className="w-full bg-[#EAE8E2] ">
        <div className="container mx-auto">
          <div className="text-center py-[100px]">
            <h1 className="font-libre-franklin font-extrabold text-[44px] leading-[53.33px] text-[#171717]">
              Sleep Easier
            </h1>
            <div className="mt-[70px]">
              <SimpleSleepDesing />
              <SimpleSleepDesing
                orderNum={2}
                imgUrl="sleep_bed_2"
                subTitle="A responsive and breathable open cell foam soothes you to sleep with the perfect bit of bounce."
                mainTitle="Breathe Flex Foam"
              />
              <SimpleSleepDesing
                imgUrl="sleep_bed_3"
                subTitle="Pressure-relieving memory foam cradles your body to help you stay asleep. "
                mainTitle="Align Memory Foam"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SleepCard;
