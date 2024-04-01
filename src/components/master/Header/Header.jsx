import Image from "next/image";
import Link from "next/link";

// Icons
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Header() {
  return (
    <header className="flex max-w-full h-[80px] justify-between items-center p-4 sm:p-6 rounded-[20px] bg-global-blue">
      {/* TITLE AND LOGO */}
      <div className="flex flex-row items-center gap-3 sm:gap-6">
        <Image
          className="w-[30px] h-[30px]"
          src={"/fem/paintbrush.svg"}
          width={30}
          height={30}
        ></Image>
        <h1 className="text-white font-poppins font-medium text-[14px] sm:text-[20px] ">
          Frontend Mentor Submissions
        </h1>
      </div>
      {/* RIGHT SIDE */}
      <div className="flex flex-row gap-4">
        {/* PAGE LINKS */}
        <div className="flex-row hidden gap-8 lg:flex">
          <button className="text-white font-poppins font-medium text-[18px] hover:underline">
            Challenges
          </button>
          <button className="text-white font-poppins font-medium text-[18px] hover:underline">
            Why?
          </button>
        </div>
        {/* DIVIDER*/}
        <div className="flex-row items-center hidden rotate-90 lg:flex">
          <p className="text-xl font-medium text-white select-none">---</p>
        </div>
        {/* SOCIALS*/}
        <div className="flex-row items-center hidden gap-4 lg:flex">
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
        <button>
          <RxHamburgerMenu className="lg:hidden w-[24px] h-[24px] text-white" />
        </button>
      </div>
    </header>
  );
}
