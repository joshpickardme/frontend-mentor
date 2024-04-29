// Imports
import { challenges } from "./challenges";

// Components
import Challenge from "@/components/master/challenge-card/Challenge";
import Header from "@/components/master/Header/Header";
import HomeFooter from "@/components/master/utils/HomeFooter";

// Challenges

export default function home() {
  return (
    <main className="flex flex-col items-center w-full gap-16 pt-6 pb-6 ml-auto mr-auto sm:w-max">
      <Header></Header>
      <div className="flex flex-col justify-start gap-8">
        <div className="flex flex-col">
          <h1 className="text-global-blue font-poppins font-medium text-[32px]">
            All Challenges
          </h1>
          <p className=" text-global-grey font-poppins text-[16px]">
            A conclusive list of all the great Frontend Mentor challenges I've
            completed
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 auto-rows-auto xl:gap-8">
          {challenges.map((challenge) => (
            <Challenge
              key={challenge}
              title={challenge.title}
              link={challenge.link}
              languages={challenge.languages}
              difficulty={challenge.difficulty}
              image={challenge.image}
              description={challenge.description}
            ></Challenge>
          ))}
        </div>
      </div>

      <HomeFooter></HomeFooter>
    </main>
  );
}
