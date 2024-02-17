import React from 'react'
import { FaBell } from "react-icons/fa";
import { CiGlobe, CiChat1 } from "react-icons/ci";

const Navbar = () => {
    return (
        <>
            <div className="bg-[#192237] rounded-md flex p-5 w-[90%] mx-auto my-10 justify-between">
                <div className="logo">
                    <h1 className="text-2xl ">
                        Dashboard
                    </h1>
                </div>
                <form action="" className='flex items-center gap-4'>
                    <input type="search" placeholder='Search...' className='bg-[#2E374A] p-2 rounded-md outline-none text-gray-400 focus:shadow-xl ' name="" id="" />
                    <FaBell />
                    <CiGlobe />
                    <CiChat1 />
                </form>

            </div>
        </>
    )
}

export default Navbar