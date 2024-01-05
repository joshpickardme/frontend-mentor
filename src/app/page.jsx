// Imports
import { challenges } from "./challenges"

// Components
import Challenge from "@/components/master/challenge-card/Challenge"
import Header from "@/components/master/utils/Header"

// Challenges

export default function home() {
  return (
    <main className="flex flex-col w-max ml-auto mr-auto pt-6 pb-6 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  auto-rows-auto gap-4 xl:gap-8">
      {challenges.map((challenge) => <Challenge key={challenge} title={challenge.title} link={challenge.link} languages={challenge.languages} difficulty={challenge.difficulty} image={challenge.image} description={challenge.description}></Challenge>)}
      </div>
    </main>
  )
}