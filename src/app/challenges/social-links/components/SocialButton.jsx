import Link from "next/link";

export default function SocialButton({ name, url }) {
  return (
    <Link href={url}>
      <button className=" bg-sociallinks-grey rounded-[8px] py-3 hover:bg-sociallinks-neon-green hover:text-sociallinks-black transition-all duration-150 text-white font-medium w-[304px]">
        {name}
      </button>
    </Link>
  );
}
