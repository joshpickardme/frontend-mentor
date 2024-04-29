"use client";

import { IoCloseCircleSharp } from "react-icons/io5";
import { useEffect } from "react";

export default function Why({ displayModal }) {
  const handleEscape = (event) => {
    if (event.key === "Escape") {
      // Do something when escape is pressed
      displayModal();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleEscape, false);

    return () => {
      document.removeEventListener("keydown", handleEscape, false);
    };
  }, []);

  return (
    <div class="fixed z-10 inset-0 bg-gray-900 bg-opacity-75 p-4 md:p-8 overscroll-auto">
      <div className="flex items-center justify-center h-full">
        <div className="max-w-[800px] p-6 bg-white flex flex-col gap-3   rounded-lg">
          {/* MODAL HEADER */}
          <div className="flex justify-between">
            <h1 className="text-global-blue font-poppins font-medium text-[28px]">
              Why?
            </h1>
            <IoCloseCircleSharp
              onClick={displayModal}
              className="cursor-pointer size-8 text-global-blue"
            />
          </div>
          <p className="text-lg font-poppins text-global-grey">
            Hello. Instead of polluting my GitHub profile with countless repos
            of these challenges, I decided to create this directory which makes
            it easy to view all of my submissions.
            <br />
            <br />
            It's not the most beautiful directory, but it's something. I'll
            probably add more to it in the future but the main priority is
            completing more challenges!
          </p>
        </div>
      </div>
    </div>
  );
}
