"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import Why from "../why/Why";

export default function Header() {
  const [modal, setModal] = useState(false);

  function displayModal() {
    setModal(!modal);
  }

  return (
    <header className="flex min-w-full h-[80px] justify-between items-center p-4 rounded-[20px] bg-global-blue">
      {/* MODAL*/}
      {modal && <Why displayModal={displayModal}></Why>}
      {/* TITLE AND LOGO */}
      <div className="flex flex-row items-center gap-6">
        <Image
          className="w-[30px] h-[30px]"
          src={"/fem/paintbrush.svg"}
          width={30}
          height={30}
        ></Image>
        <h1 className="text-white font-poppins font-medium hidden md:flex text-[20px] ">
          Frontend Mentor Submissions
        </h1>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-row gap-4">
        {/* PAGE LINKS */}
        <div className="flex flex-row gap-8">
          <button
            onClick={() => setModal(true)}
            className="text-white font-poppins font-medium text-[18px] hover:underline"
          >
            Why?
          </button>
        </div>
        {/* DIVIDER*/}
        <div className="flex flex-row items-center rotate-90">
          <p className="text-xl font-medium text-white select-none">---</p>
        </div>
        {/* SOCIALS*/}
        <div className="flex flex-row items-center gap-4">
          <Link href={"https://www.x.com/joshpickardme"} target="_blank">
            <FaXTwitter className="w-[24px] h-[24px] text-white" />
          </Link>
          <Link href={"https://www.github.com/joshpickardme"} target="_blank">
            <FaGithub className="w-[24px] h-[24px] text-white" />
          </Link>
          <Link
            target="_blank"
            href={"https://www.frontendmentor.io/profile/joshpickardme"}
          >
            <SiFrontendmentor className="w-[24px] h-[24px] text-white" />
          </Link>
        </div>
        {/* MOBILE MENU*/}
      </div>
    </header>
  );
}
