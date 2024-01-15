


export default function Header({title, description}) {
    return (
        <header className="flex flex-col gap-[9px] lg:gap-[1px]">
            <h1 className=" text-[24px] lg:text-[32px] font-bold text-multi-step-denim">{title}</h1>
            <p className=" text-multi-step-gray text-[15px]">{description}</p>
        </header>
    )
}