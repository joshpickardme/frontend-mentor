"use client";

// Imports
import Image from "next/image";
import { motion } from "framer-motion";

// Components
import BackV2 from "@/components/master/utils/BackV2";

export default function about() {
  return (
    <main className="flex bg-bpc-yellow min-w-full min-h-screen justify-center items-center">
      <BackV2
        fem={
          "https://www.frontendmentor.io/solutions/blog-preview-card-created-with-react-tailwindcss-and-framer-motion-_SQxiasmQr"
        }
        git={
          "https://github.com/joshpickardme/frontend-mentor/tree/main/src/app/challenges/blog-preview-card"
        }></BackV2>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex ml-6 mr-6 p-6 gap-6 flex-col w-[384px] rounded-xl bg-bpc-pure-white outline outline-2h outline-bpc-black shadow-[12px_10px_0_1px_rgba(0,0,0,100)]">
        <Image
          className="w-full rounded-xl"
          src={"/blog-preview-card/illustration-article.svg"}
          width={300}
          height={150}></Image>
        <div className="flex flex-col min-w-full gap-3">
          <p className="text-bpc-black font-bold bg-bpc-yellow pl-3 pr-3 pt-1 pb-1 rounded-lg max-w-fit">
            Learning
          </p>
          <p>Published 21 Dec 2023</p>
          <h1 className="text-bpc-black text-2xl font-black hover:text-bpc-yellow duration-100 cursor-pointer">
            HTML & CSS foundations
          </h1>
          <p className="text-bpc-grey">
            These languages are the backbone of every website, defining
            structure, content and presentation.
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center">
          <Image
            src={"/blog-preview-card/image-avatar.webp"}
            width={32}
            height={32}></Image>
          <p className="font-bold text-sm">Greg Hooper</p>
        </div>
      </motion.div>
    </main>
  );
}
