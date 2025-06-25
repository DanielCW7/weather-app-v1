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
            <tr className="bg-base-100 text-center">
                <td className="">{props.date ?? "[date here]"}</td>
                <td className=""><img src={check(props.img)} className="w-12 m-auto rounded-full" /></td>
                <td className="">{props.high ?? "[high here]"}</td>
                <td className="">{props.low ?? "[low here]"}</td>
                <td className="">{props.rain ?? "[precip here]"}</td>
            </tr>

            // this goes in the img src{} attr
            // check(props.img)
    )
}

export default Card