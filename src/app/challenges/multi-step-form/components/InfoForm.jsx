

// Components
import Input from "./Input"


export default function InfoForm() {
    return (
        <form className="flex flex-col gap-4" action="">
            <div className="flex flex-col gap-2">
                <label className="text-[14px] text-multi-step-denim" htmlFor="tes">Name</label>
                <Input placeholder={'e.g. Stephen King'}></Input>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-[14px] text-multi-step-denim" htmlFor="tes">Email Address</label>
                <Input placeholder={'e.g. stephenking@lorem.cm'}></Input>
            </div>
            <div className="flex flex-col gap-2">
                <label className="text-[14px] text-multi-step-denim" htmlFor="tes">Phone Number</label>
                <Input placeholder={'e.g. +1 234 567 890'}></Input>
            </div>
            
            
        </form>
    )
}