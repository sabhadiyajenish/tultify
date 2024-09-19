"use client";
import SubHeader from "@/app/components/about/SubHeader";
import Footer from "@/app/components/common/Footer";
import Help_Deciding from "@/app/components/home/Help_Deciding";
import ProductCard from "@/app/components/product/ProductCard";
import ProDetailsCard from "@/app/components/product/productDetails/ProDetailsCard";
import QuestionsCard from "@/app/components/product/productDetails/QuestionsCard";
import QuestionsLine from "@/app/components/product/productDetails/QuestionsLine";
import SleepCard from "@/app/components/product/productDetails/SleepCard";
import { useParams } from "next/router";

const ProductDetailsPage = ({ params }) => {
  //   const { productId } = useParams();

  // Render your product page using the [productId]
  return (
    <div className="box-border p-0 m-0">
      <SubHeader title="Mattresses" />
      <div className="mt-[100px] ">
        <ProDetailsCard />
        <div className="mt-[80px] container mx-auto">
          <div className="mx-[100px]">
            <hr className="w-full h-[2px] bg-[#7B6E62] opacity-50  " />
          </div>
        </div>
        <div className="mt-[70px] container mx-auto">
          <div className="mx-[93px]">
            <h1 className="font-libre-franklin font-extrabold text-[44px] leading-[53.33px] text-[#171717]">
              Inside the One
            </h1>
            <p className="mt-[30px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              Our signature all foam mattress designed with a responsive yet
              supportive medium-firm feel is perfect for any sleep style.
            </p>
            <p className="mt-[20px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              Best Solution For: Back and stomach sleepers.
            </p>
            <p className="mt-[20px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              <span className=" font-bold"> RESPONSIVE FEEL: </span>A
              supportive medium-firm feel with the perfect bit of bounce.
            </p>
            <p className="mt-[20px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              <span className=" font-bold"> PRESSURE RELIEVING:  </span>Align
              Memory Foam cradles your body to help you stay asleep.
            </p>
            <p className="mt-[20px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              <span className=" font-bold"> RESPONSIVE FEEL: </span>A
              supportive medium-firm feel with the perfect bit of bounce.
            </p>
            <p className="mt-[20px] font-poppins font-normal text-[20px] leading-[30px] text-[#171717]">
              While the Original & The Casper has gone to bed, you can
              experience the latest in cutting-edge coziness with our new
              mattress, the One.
            </p>
          </div>
        </div>
        <div className="mt-[100px]">
          <QuestionsLine />
        </div>
        <div className="">
          <QuestionsCard />
        </div>
        <div className="mt-[100px]">
          <SleepCard />
        </div>
        <div className=" container mx-auto mt-[100px]">
          <h1 className="font-libre-franklin text-center font-extrabold text-[40px] leading-[48.48px] text-[#171717]">
            Discover other great options
          </h1>
          <div className="mt-[50px]">
            <div className="flex flex-wrap justify-center items-center gap-[30px]">
              {[{ id: 1 }, { id: 2 }, { id: 3 }].map((item, index) => (
                <ProductCard key={item.id} index={index} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <Help_Deciding />
        </div>
        <div className="mt-[100px]">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
