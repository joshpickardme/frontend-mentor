"use client"
import Image from "next/image";
import BackV2 from "@/components/master/utils/BackV2";

export default function ProductPreviewCard() {
  return (
    <>
    <BackV2 fem={"https://www.frontendmentor.io/solutions/product-preview-card-with-tailwindcss-iBNATvVhHo"} git={"https://github.com/joshpickardme/frontend-mentor/tree/main/src/app/challenges/product-preview-card"}></BackV2>
    <main className="flex min-h-screen bg-ppc-cream justify-center items-center">
      <div className="flex flex-col md:flex-row bg-white w-[343px] h-[611px] md:w-[600px] md:h-[450px] rounded-[10px]">
        <Image
          src={"/product-preview-card/image-product-desktop.jpg"}
          className="hidden md:block rounded-bl-[10px] rounded-tl-[10px]"
          height={450}
          width={300}
        ></Image>
        <Image
          src={"/product-preview-card/image-product-mobile.jpg"}
          className="block md:hidden rounded-tr-[10px] rounded-tl-[10px]"
          height={240}
          width={343}
        ></Image>

        <div className="flex flex-col p-6 md:p-8 w-full gap-5">
          <h2 className="text-ppc-aurometal-saurus font-montserrat tracking-[5px] font-medium text-[12px] w-max h-max">
            PERFUME
          </h2>
          <h1 className="t text-ppc-gunmetal font-fraunces font-bold text-[32px] leading-[32px]">
            Gabrielle Essence Eau De Parfum
          </h1>
          <p className="font-montserrat text-ppc-aurometal-saurus text-[14px] leading-[23px] font-medium md:mt-2">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="flex flex-row gap-5 items-center md:mt-2">
            <h3 className="font-fraunces font-bold text-ppc-deep-aquamarine leading-[13px] text-[32px]">
                $149.99
            </h3>
            <h4 className="font-montserrat text-[13px] font-medium line-through text-ppc-aurometal-saurus">
                $169.99
            </h4>
          </div>
          <button className="flex flex-row items-center justify-center rounded-[8px] gap-3 bg-ppc-deep-aquamarine hover:bg-ppc-deep-aquamarine-hover transition-colors duration-150 text-white font-montserrat font-bold text-[14px] py-4 md:mt-4"><Image className="w-[14] h-[16px]" src={"/product-preview-card/icon-cart.svg"} height={16} width={14.39}></Image>Add to cart</button>

        </div>
      </div>
    </main>
    </>
  );
}
