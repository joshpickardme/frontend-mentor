// Imports
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Components
import Selection from "./Selection";

export default function ThanksCard({ scoreActive }) {
  return (
    <motion.div
      initial={{ rotateY: -90 }}
      animate={{ rotateY: -0 }}
      transition={{ duration: 0.12 }}
      className="flex flex-col gap-6 items-center ml-6 mr-6 w-[327px] h-[360px] sm:w-[412px] sm:h-[416px] bg-rating-dark-blue bg-gradient-radial from-[#232A34] to-[#181E27] p-6 sm:p-8 rounded-[30px] shadow-md">
      <Image
        alt="thank you image"
        className="mt-3 w-[144px] h-[96px] sm:w-[162px] sm:h-[108px]"
        src={"/interactive-rating/illustration-thank-you.svg"}
        width={162}
        height={108}></Image>
      <Selection score={scoreActive}></Selection>
      <div className="flex flex-col gap-4">
        <h1 className="text-white font-bold text-center text-[28px]">
          Thank you!
        </h1>
        <p className="text-rating-light-grey text-[15px] text-center">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </motion.div>
  );
}
