export default function Selection({ score }) {
  return (
    <div className="flex items-center justify-center rounded-full font-medium pl-2 pr-2 pt-1 pb-1 w-[193px] h-[32px] bg-rating-dark-blue ">
      <p className="text-rating-orange text-[15px]">
        You selected {score} out of 5
      </p>
    </div>
  );
}
