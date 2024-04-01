import Link from "next/link";

const website = "https://www.joshpickard.me";
const github = "https://www.github.com/joshpickardme";

export default function HomeFooter() {
  return (
    <div className="flex flex-col gap-1 max-w-[552px] items-center text-center ml-auto mr-auto pt-20 pb-20">
      <h1 className="font-poppins text-global-blue text-[32px]">
        Oh no! You've reached the end.
      </h1>
      <p className="text-global-grey font-poppins text-[16px] text-center">
        I hope you've enjoyed this directory of my completed challenges. Check
        out my{" "}
        <Link target="_blank" href={website}>
          <span className="underline text-global-blue">Personal Website</span>
        </Link>{" "}
        or my{" "}
        <Link target="_blank" href={github}>
          <span className="underline text-global-blue">GitHub Profile</span>
        </Link>{" "}
        to see some of my other work :)
      </p>
    </div>
  );
}
