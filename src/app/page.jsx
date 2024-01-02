// Imports

// Components
import Challenge from "@/components/master/challenge-card/Challenge"
import Header from "@/components/master/utils/Header"

export default function home() {
  return (
    <main className="flex flex-col w-max ml-auto mr-auto pt-6 pb-6 items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  auto-rows-auto gap-4 xl:gap-8">
        <Challenge title={'Blog Preview Card'} link={'/challenges/blog-preview-card'} languages={['HTML', 'CSS']} difficulty={1} image={'/blog-preview-card/blog-preview-card.jpg'} description={'This HTML & CSS-only challenge is a perfect project for beginners getting up to speed with HTML and CSS fundamentals, like HTML structure and the box model.'} ></Challenge>
        <Challenge title={'Newsletter Signup'} link={'/challenges/newsletter-signup'} languages={['HTML', 'CSS', 'JS']} difficulty={2} image={'/newsletter/desktop-design.jpg'} description={'This will test your skills with basic form structure, validation, and submission. The success state will also be an excellent opportunity to work with DOM manipulation.'} ></Challenge>
      </div>
    </main>
  )
}