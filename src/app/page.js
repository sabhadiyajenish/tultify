import Image from "next/image";
import BannerSection from "./components/BannerSection";
import CartBox from "./components/CartBox";
import Mattress from "./components/Mattress";
import Navbar from "./components/Navbar";
import CloudTypes from "./components/CloudTypes";
import CustomerReview from "./components/CustomerReview";

export default function Home() {
  return (
    <div>
      <BannerSection />
      <div className="mt-[100px]">
        <h1 className=" text-center font-libre-franklin text-[#171717] font-extrabold text-[44px] leading-[53.33px]">
          Included with every Tuftzy mattress{" "}
        </h1>
      </div>
      <Mattress />
      <div className="mt-[160px]">
        <h1 className=" text-center font-libre-franklin text-[#171717] font-extrabold text-[44px] leading-[53.33px]">
          Meet the whole new Tuftzy
        </h1>
        <p className="font-poppins text-[20px] font-normal leading-[30px] text-center text-[#171717] mt-[18px]">
          Sleep will never be the same.
        </p>
      </div>
      <div className="mt-[50px] container mx-auto">
        <div className="flex gap-x-[30px] justify-center">
          <CartBox
            select={false}
            title="The Allswell"
            icon_image="allswell_image"
            sub_content="A great night's Sleep at an amazing value."
            price="$123"
            button_text="Shop The Allswell"
            breakWord={true}
          />
          <CartBox
            select={false}
            title="The Lux"
            icon_image="lux_bed"
            sub_content="Our luxe mattress boasts a ton of premium features at an unreal price for its value."
            price="$123"
            button_text="Shop The Lux"
          />
          <CartBox
            select={false}
            title="The Supreme"
            icon_image="supreme_bed"
            sub_content="The name says it all. The best of our best."
            price="$123"
            button_text="Shop The Supreme"
            breakWord={true}
          />
        </div>
      </div>
      <div className="mt-[100px]">
        <Image
          src="/images/tuftzy_sofa.png"
          alt={"tuftzy_sofa"}
          className="w-full h-full"
          height={0}
          width={0}
          sizes="100vw"
        />
      </div>
      <CloudTypes />
      <CustomerReview />
    </div>
  );
}
