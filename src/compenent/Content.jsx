import React, { useState } from "react";
import audiophile from '../assets/images/client-audiophile.svg';
import databiz from '../assets/images/client-databiz.svg';
import maker from '../assets/images/client-maker.svg';
import meet from '../assets/images/client-meet.svg';

export default function Content({ isOpen }) {

    return (
        <>
            <div className={`md:px-0 grid grid-cols-2 md:flex md:flex-col-reverse gap-x-12 md:gap-y-8 h-[700px] w-full md:h-auto  px-28  py-10 md:py-2  `}>
                <div className="flex flex-col justify-between md:justify-normal gap-5 h-[600px] pt-16  ">
                    <div className="flex flex-col gap-12 ">
                        <h1 className="font-bold font-sans text-Almostblack text-[70px] leading-none md:text-center md:text-[40px]" > Make <br className="block md:hidden" /> remote work </h1>
                        <p className="font-sans font-semibold text-mediumGray text-[19px] md:text-center md:text-[15px]">Get your team in sync. no matter your location. streamline processes. create team rituels, and watch productivity soar </p>
                        <button className="flex justify-start bg-Almostblack text-almostWhite font-bold w-fit h-fit px-6 py-4 rounded-[14px] md:m-auto">Learn more</button>
                    </div>


                    <div className="grid grid-cols-4 gap-x-2  ">
                        <img src={databiz} alt="" />
                        <img src={audiophile} alt="" />
                        <img src={meet} alt="" />
                        <img src={maker} alt="" />
                    </div>
                </div>
                <div className="">
                    <img className="block  md:hidden h-[600px] w-[700px] " src="src/assets/images/image-hero-desktop.png" alt="" />
                    <img className=" hidden md:block h-auto" src="src/assets/images/image-hero-mobile.png" alt="" />

                </div>
            </div>

        </>
    )


}