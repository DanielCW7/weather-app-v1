import React from "react";
import sun from '../images/sun.png';
import storm from '../images/stormCloud.png'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="sticky top-0 left-0 right-0 z-10 overflow-hidden max-h-auto">
            <div className="bg-white flex justify-between px-10 py-2">
                <div className="bg-white flex items-center justify-start">
                    <img src={storm} className="max-h-10 " />
                    <h2 className="text-[#4A00C8] font-black text-xl p-2"> Weather! </h2>                
                </div>

                <div className="left-0 right-0 bg-white flex items-right justify-start">
                    <Link className="ml-8 font-semibold text-xl p-2 hover:text-[#4A00C8] focus:underline" to={'/Home/'}>Home</Link>
                    <Link className="font-semibold text-xl p-2 hover:text-[#4A00C8] focus:underline" to={'/News/'}>News</Link>
                    <Link className="font-semibold text-xl p-2 hover:text-[#4A00C8] focus:underline" to={'/Sports/'}>Sports</Link>
                </div>
            </div>
        </div>

    )
}

export default Nav