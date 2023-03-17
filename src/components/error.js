import React from "react";

const Error = (props) => {
    return (
        <div className="flex flex-col justify-center col-span-4">
            <p className="font-bold text-gray-400 text-center"> The request resulted in a {props.status} error code </p>
        </div>
    )
}

export default Error