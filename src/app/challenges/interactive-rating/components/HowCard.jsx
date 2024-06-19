"use client";

// Imports
import { useState } from "react";
import { motion } from "framer-motion";
import { useAnimationControls } from "framer-motion";

// Components
import Score from "./Score";
import Icon from "./Icon";

export default function HowCard({
  scores,
  scoreActive,
  setScoreActive,
  setHowActive,
}) {
  const controls = useAnimationControls();

  function test() {
    setHowActive(false);
  }

  function handleFlip() {
    if (scoreActive == 0) return;
    controls.start({
      rotateY: -90,
      transition: { duration: 0.12 },
    });
  }

  return (
    <motion.div
      initial={{ rotateY: 0 }}
      animate={controls}
      onAnimationComplete={test}
      className="flex flex-col w-[327px] h-[360px] sm:w-[412px] sm:h-[416px] ml-6 mr-6 bg-rating-dark-blue bg-gradient-radial from-[#232A34] to-[#181E27] p-6 sm:p-8  rounded-[30px] shadow-md">
      <div className="flex flex-row mb-5 sm:mb-10">
        <Icon></Icon>
      </div>
      <div className="flex h-full flex-col gap-2 sm:gap-5">
        <h1 className="text-white text-2xl mb-[10px] sm:mb-0 sm:text-[28px] leading-none font-bold">
          How did we do?
        </h1>
        <p className="text-rating-light-grey text-[14px] mb-[24px] sm:mb-0 sm:text-[15px]">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div className="flex flex-row min-w-full justify-between mb-[24px] sm:mb-0">
          {scores.map((score) => (
            <Score
              key={score}
              id={score}
              scoreActive={scoreActive}
              setScoreActive={setScoreActive}
              number={score}></Score>
          ))}
        </div>
        <button
          onClick={handleFlip}
          className="min-w-full bg-rating-orange hover:bg-white hover:text-rating-orange tracking-[2px] text-[15px]  pt-3 pb-3 text-center text-white font-bold duration-150 rounded-full">
          SUBMIT
        </button>
      </div>
    </motion.div>
  );
}
