import React from "react";
import sun from '../images/sun.png';
import storm from '../images/stormCloud.png'
import { Link } from "react-router-dom";


const Nav = () => {
    return (
        <div className="sticky bg-base-200 top-0 left-0 right-0 z-10 overflow-hidden max-h-auto">
            <div className="max-w-7xl m-auto flex justify-between px-2 py-2">
                <div className="bg-base-200 flex items-center justify-start"> 
                    <h2 className="text-primary font-black text-xl"> Weather! </h2>                
                </div>
                <div className="left-0 right-0 flex items-right justify-start gap-4">
                    <Link className="flex flex-col justify-center" to={"/"}><p>Home</p></Link>
                    <Link className="flex flex-col justify-center" to={"/news"}><p>News</p></Link>
                    <label className="swap swap-rotate">
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" className="theme-controller" value="light"/>

                    {/* sun icon */}
                    <img className="swap-on w-10 h010" src={sun} />

                    {/* moon icon */}
                    <img className="swap-off w-10 h010" src={storm} />

                    </label>  
                </div>
            </div>
        </div>

    )
}

export default Nav