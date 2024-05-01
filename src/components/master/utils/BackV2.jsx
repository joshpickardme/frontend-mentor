import { SiFrontendmentor } from "react-icons/si";
import { IoArrowBack } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";

import Link from "next/link";

export default function BackV2({fem, git, white=false}) {
  return (
    <div className="fixed left-0 bottom-0">
      <div className="flex md:flex-row flex-col-reverse gap-3 p-2 md:p-6">
        {/* Back */}
        <Link href={"/"}>
            <button className={`p-4 w-max shadow-lg ${white ? "bg-white text-gray-800" : "bg-gray-800 text-white"} rounded-lg font-semibold font-poppins`}>
                <IoArrowBack className="scale-125" />
            </button>
        </Link>
        {/* FEM */}
        <Link target={"_blank"} href={fem}>
        <button className={`p-4 w-max ${white ? "bg-white text-gray-800" : "bg-gray-800 text-white"} shadow-lg rounded-lg`}>
          <SiFrontendmentor className="scale-125" />
        </button>
        </Link>
        {/* GitHub */}
        <Link target={"_blank"} href={"https://github.com/joshpickardme/frontend-mentor/blob/main/src/app/challenges/recipe-page/page.jsx"}>
        <button className={`p-4 w-max ${white ? "bg-white text-gray-800" : "bg-gray-800 text-white"} shadow-lg rounded-lg`}>
          <FaGithub className="scale-125" />
        </button>
        </Link>
      </div>
    </div>
  );
}
