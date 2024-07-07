import todoIcon from '../assets/images/icon-todo.svg';
import reminders from '../assets/images/icon-reminders.svg';
import planning from '../assets/images/icon-planning.svg';
import calendar from '../assets/images/icon-calendar.svg';

export default function FeaturesList() {

    return (
        <>
            <div className=" md:hidden absolute top-[-10px] right-0 bg-white mt-10 h-40 w-[130px] flex justify-center items-center  rounded-md shadow-lg ">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-2 text-[12px] font-semibold  font-sans text-mediumGray hover:text-black"> <img src={todoIcon} alt="" className="h-4 w-[16px]" /> Todo List </li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black"> <img src={calendar} alt="" className="h-4 w-[16px]" /> Calendar</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black"> <img src={reminders} alt="" className="h-4 w-[16px]" /> Reminders </li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold  font-sans text-mediumGray hover:text-black"> <img src={planning} alt="" className="h-4 w-[16px]" /> Planning </li>

                </ul>
            </div>
            <div className="hidden md:flex md:h-auto md:justify-center md:pt-3">
                <ul className="flex flex-col gap-4">
                    <li className="flex items-center gap-2 text-[12px] font-semibold  font-sans text-mediumGray hover:text-black"> <img src={todoIcon} alt="" className="h-4 w-[16px]" /> Todo List </li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black"> <img src={calendar} alt="" className="h-4 w-[16px]" /> Calendar</li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold font-sans text-mediumGray hover:text-black"> <img src={reminders} alt="" className="h-4 w-[16px]" /> Reminders </li>
                    <li className="flex items-center gap-2 text-[12px] font-semibold  font-sans text-mediumGray hover:text-black"> <img src={planning} alt="" className="h-4 w-[16px]" /> Planning </li>

                </ul>
            </div>


        </>
    )
}