export default function Input({placeholder, value, setValue }) {
    return (
        <input placeholder={placeholder}  className="w-full h-[48px] rounded-[8px] font-medium outline p-[15px] text-multi-step-denim outline-1 outline-solid outline-multi-step-gray focus:outline-multi-step-purple focus:outline-2" type="text" />
    )
}