export default function Header() {
  return (
    <div className="flex items-center justify-between min-w-full h-12 p-4 mb-12 gap-8 outline-bpc-grey">
      <h1 className="font-semibold text-xl">Challenges</h1>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="search"
          className="p-3 outline outline-1 outline-bpc-grey rounded-md"
        />
      </div>
    </div>
  );
}
