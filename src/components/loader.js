import React from "react";
import loader from '../images/spinner.png'
const Loading = () => {
    return (
        <div src={loader} alt="loading..." className="loading loading-bars loading-xl text-info"></div>
    )
}

export default Loading