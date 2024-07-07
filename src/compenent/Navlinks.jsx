import React, { useState } from "react";
import arrowDicon from '../assets/images/icon-arrow-down.svg';
import arrowUicon from '../assets/images/icon-arrow-up.svg';
import FeaturesList from "./FeaturesList";
import CompanyList from "./CompanyList";

export default function Navlinks() {
    const [features, setFeatures] = useState(false);
    const [company, setCompany] = useState(false);


    function handleFeatures() {
        setFeatures(!features);
    }
    function handleCompany() {
        setCompany(!company);
    }
    return (
        <>
            <div className="flex flex-row gap-5 md:flex-col  md:gap-y-8 md:items-start  md:bg-white  md:h-screen   ">
                <div className="relative ">
                    <button onClick={handleFeatures} className="flex gap-1 cursor-pointer items-center text-[15px] font-semibold font-sans  text-mediumGray hover:text-black">
                        Features
                        {!features ? <img src={arrowDicon} alt="" className="h-1 w-[6px]" /> :
                            <img src={arrowUicon} alt="" className="h-1 w-[6px]" />
                        }
                    </button>
                    {features ? <> <FeaturesList></FeaturesList>
                    </> : ""
                    }
                </div>
                <div className="relative">
                    <button onClick={handleCompany} className=" flex  gap-1 items-center text-[15px] font-semibold cursor-pointer font-sans text-mediumGray hover:text-black">
                        Company
                        {!company ? <img src={arrowDicon} alt="" className="h-1 w-[6px]" /> :
                            <img src={arrowUicon} alt="" className="h-1 w-[6px]" />
                        }
                    </button>
                    {company ? <> <CompanyList></CompanyList>
                    </> : ""
                    }
                </div>

                <button className=" font-sans cursor-pointer text-[15px] font-semibold  text-mediumGray hover:text-black">
                    Careers
                </button>
                <button className=" font-sans cursor-pointer text-[15px] font-semibold  text-mediumGray hover:text-black">
                    About
                </button>
                <div className="hidden md:flex md:flex-col ">
                    <button className="text-[15px] font-semibold  font-sans cursor-pointer text-mediumGray hover:text-black ">
                        Login
                    </button>
                    <button className="text-[15px] font-semibold  font-sans cursor-pointer text-mediumGray hover:text-black border border-mediumGray hover:border-black px-3 py-1 rounded-lg ">
                        Register
                    </button>
                </div>
            </div>
            <div className="flex gap-x-4 md:hidden ">
                <button className="text-[15px] font-semibold  font-sans cursor-pointer text-mediumGray hover:text-black ">
                    Login
                </button>
                <button className="text-[15px] font-semibold  font-sans cursor-pointer text-mediumGray hover:text-black border border-mediumGray hover:border-black px-3 py-1 rounded-lg ">
                    Register
                </button>
            </div>



        </>
    )
} 