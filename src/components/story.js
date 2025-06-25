import React from "react";


const Story = (props) => {
let adjustedlink = "https://weather.com" + props?.link ?? "/";

    return (
        <div className="card bg-base-200 shadow-sm">
            <figure>
                {/* <img style={{backgroundImage: `url(${props.img})`}}/> */}
                <img src={props.img}/>
            </figure>
            
            <div className="card-body">
                <h3 className="card-title text-1xl font-black mb-2"> {props?.headline ?? "404"} </h3>
                <p> {props?.desc ?? "Hmmm, that didn't work. Please try again later!"} </p>
                <div className="card-actions justify-end">
                    <a className="text-blue-300 mt-5" href={adjustedlink} target="_blank"><button className="btn btn-primary btn-sm"> Read More </button></a>
                </div>
            </div>


        </div>
    )
}

export default Story