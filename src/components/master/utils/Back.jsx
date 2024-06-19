// Imports
import Link from "next/link";

// Icons
import { FaArrowCircleLeft } from "react-icons/fa";
import { SiFrontendmentor } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

export default function Back({ fem, white }) {
  return (
    <div className="absolute top-8 text-center min-w-full">
      <div className="flex flex-row items-center w-full justify-between rounded-full pl-6 pr-6">
        <Link href={"/"}>
          <FaArrowCircleLeft
            className={`scale-[2] ${white ? "text-white" : "text-black"}  cursor-pointer opacity-20 hover:opacity-100 duration-200`}
          />
        </Link>
        <div className="flex flex-row gap-7">
          <a target="_blank" href={fem}>
            <SiFrontendmentor
              className={`scale-[2] ${white ? "text-white" : "text-black"} cursor-pointer opacity-20 hover:opacity-100 duration-200`}
            />
          </a>
          <a target="_blank" href="https://github.com/joshpickardme">
            <FaGithub
              className={`scale-[2] ${white ? "text-white" : "text-black"} cursor-pointer opacity-20 hover:opacity-100 duration-200`}
            />
          </a>
        </div>
      </div>
    </div>
  );
}
