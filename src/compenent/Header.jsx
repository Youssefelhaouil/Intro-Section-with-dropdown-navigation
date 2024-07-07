import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import openIcon from "../assets/images/icon-menu.svg";
import Navlinks from "./Navlinks";




export default function Header({ isOpen, toggleMenu }) {
  


    return (
        <>
            <div className={`mt-9 grid grid-cols-[13%_87%] items-center md:px-4 md:flex ${isOpen ? "md:before:content-['']  md:before:fixed md:before:top-0 md:before:left-0 md:before:h-[100%] md:before:z-1 md:before:w-[100%] md:before:bg-[rgba(0,0,0,0.72)]" : ""}   `}>
                <div className="">
                    <img src={Logo} alt="" />
                </div>
                <div className={`hidden absolute right-0 top-0   md:flex md:flex-col md:justify-center md:items-center     ${isOpen ? 'bg-white md:fixed':""}    md:w-[60%] md:gap-4 ` } >
                    <button onClick={toggleMenu} className="relative right-[-90px]">
                        {!isOpen ? <img src={openIcon} alt="" className="float-end pr-2 pt-8" /> : <img src={closeIcon} alt="" className="float-end pr-2 pt-8 " />}
                    </button>
                    {isOpen && <Navlinks></Navlinks>}
                </div>
                <div className="flex justify-between items-center ml-[-10px] md:hidden ">
                    <Navlinks></Navlinks>
                </div>

            </div >
        </>
    )
}