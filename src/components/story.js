import React from "react";


const Story = (props) => {
let adjustedlink = "https://weather.com" + props?.link ?? "/";

    return (
        <div className="flex min-h-[350px] bg-cover" style={{backgroundImage: `url(${props.img})`}}>
            <div className="flex flex-col justify-end p-5 bg-gradient-to-t from-black text-white w-full">
                <h3 className="text-1xl font-black mb-2"> {props?.headline ?? "404"} </h3>
                <p> {props?.desc ?? "Hmmm, that didn't work. Please try again later!"} </p>
                <a className="text-blue-300 mt-5" href={adjustedlink} target="_blank"> Read More </a>
            </div>
        </div>
    )
}

export default Story