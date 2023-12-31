// Imports

// Components
import Challenge from "@/components/master/challenge-card/Challenge"

export default function home() {
  return (
    <main className="flex min-h-screen min-w-full pt-12 pb-12 justify-center ">
      <div className="grid grid-cols-3 gap-12">
        <Challenge title={'Blog Preview Card'} link={'/challenges/blog-preview-card'} languages={['HTML', 'CSS']} difficulty={1} image={'/blog-preview-card.jpg'} description={'This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.'} ></Challenge>
      </div>
    </main>
  )
}