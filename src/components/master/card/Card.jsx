export default function Card({
  title,
  link,
  languages,
  difficulty,
  description,
  image,
}) {
  return (
    <div className="flex flex-col w-[320px] z-10 h-[473px] outline outline-[3px] shadow-lg bg-red-200 outline-[#393939] rounded-[15px]">
      <div className="w-full overflow-hidden z-0 h-[200px]">
        <img
          className="z-0 overflow-hidden duration-200 cursor-pointer hover:scale-150"
          src={image}
          alt=""
        />
      </div>
      <div className="flex flex-col h-full gap-2 p-6 bg-neutral-100">
        <div className="flex justify-between w-full">
          <h1 className="font-poppins font-semibold max-w-[16rem] text-[#393939] text-[20px]">
            {title}
          </h1>
          <p>{difficulty}</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-poppins text-[15px] text-[#515151]">
            {description}
          </p>
          <div className="flex flex-wrap gap-1">
            <p className="font-poppins cursor-pointer font-medium text-[14px] text-[#29376B]">
              #react
            </p>
            <p className="font-poppins cursor-pointer font-medium text-[14px] text-[#29376B]">
              #tailwind
            </p>
            <p className="font-poppins cursor-pointer font-medium text-[14px] text-[#29376B]">
              #framer-motion
            </p>
            <p className="font-poppins cursor-pointer font-medium text-[14px] text-[#29376B]">
              #typescript
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
