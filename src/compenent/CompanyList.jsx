

export default function CompanyList(){
    return (
        <>
            <div className="md:hidden absolute top-[-10px] bg-white mt-10 h-[110px] w-[90px] flex justify-center items-center rounded-md shadow-lg ">
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">History</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">Our Team</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">Blog </li>

                </ul>
            </div>
            <div className="hidden md:flex md:h-auto md:justify-center md:pt-3">
                <ul className="flex flex-col gap-3">
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">History</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">Our Team</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black">Blog </li>

                </ul>
            </div>
        </>
    )
}