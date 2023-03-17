import React from "react";
import { Link } from "react-router-dom";

// purple sticky nav
const Nav2 = () => {

    
    return (
        
        <div className="sticky top-0 left-0 right-0 z-10 overflow-hidden max-h-auto">
            <div className="right-0 bg-[#4A00C8] px-10 py-4 flex justify-center gap-20 text-[#fff] font-bold">
                <Link to={'/Home'}>Home</Link>
                <Link to={'/News'}>News</Link>
                <Link to={'/Sports'}>Sports</Link>

            </div>
        </div>
    )
}

export default Nav2