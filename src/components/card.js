import React, {setState, Component} from "react";
import cloud from '../images/cloud.png';
import partiallyCloudy from '../images/partiallyCloudy.png'
import rainy from '../images/rainy.png'
import snow from '../images/snow.png'
import sun from '../images/sun.png'


const Card = (props) => {
    // props.conditions, includes()
    // need to conditionally render the icons based on props.conditions
        const check = (conditions) => {
            if(conditions.includes("Clear")) { return sun }
            else if(conditions.includes("Rain")) { return rainy }
            else if(conditions.includes("Snow")) { return snow }
            else if(conditions.includes("Partially cloudy")) { return partiallyCloudy }
            else if(conditions.includes("Overcast")) { return cloud }
            else { return sun }
        }
    

    return (
            <li className="flex flex-row bg-gray-200 items-center border-b border-gray-300 px-10 md:flex-col md:px-2 md:border-x md:w-full">
                <div className="flex flex-row md:flex-col items-center justify-evenly border-r border-gray-300 md:p-0 border-r-0">
                    <p className="text-gray-800 md:text-sm lg:text-md lg:text-lg"> {props.date ?? "?"} </p>                    
                    <img src={check(props.img)} className="w-1/3" /> 
                </div>

                <div className="flex flex-row flex-auto md:flex-col justify-evenly p-2 md:px-0 md:py-4 md:w-full lg:max-w-[150px]">
                    <span className="flex flex-col md:flex-row md:justify-between md:text-sm">
                        <span className="font-light text-gray-800 lg:text-lg">High</span>
                        <span className="font-bold text-gray-800 lg:text-lg">{props.high ?? "?"}</span>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between md:text-sm">
                        <span className="font-light text-gray-800 lg:text-lg">Low</span>
                        <span className="font-bold text-gray-800 lg:text-lg">{props.low ?? "?"}</span>
                    </span>

                    <span className="flex flex-col md:flex-row md:justify-between md:text-sm">
                        <span className="font-light text-gray-800 lg:text-lg">Precip %</span>
                        <span className="font-bold text-gray-800 lg:text-lg">{props.rain ?? "?"}</span>
                    </span>
                </div>
            </li>

            // this goes in the img src{} attr
            // check(props.img)
    )
}

export default Card