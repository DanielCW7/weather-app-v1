import React from "react";
import loader from '../images/spinner.png'
const Loading = () => {
    return (
        <span className="flex justify-center col-span-4">
            <img src={loader} alt="loading..." className="flex justify-center max-w-[50px] animate-spin m-20"/>
        </span>
    )
}

export default Loading