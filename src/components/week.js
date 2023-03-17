import React, { useRef, useEffect, createElement, ReactDOM }from "react";
import Card from './card';

const Week = (props) => {

    // array of 7 days
    let data = props.val2;
    const test = () => {
        console.log(data)
        if(data) {
            return data.map(day => {
                let adjustedDate = day.datetimeStr.substring(0,10);
                return <Card key={day.datetime}  high={day.maxt} low={day.mint} rain={day.pop} date={adjustedDate} img={day.conditions}/>
            })
        } else { return <div className="p-10 bg-gray-200 block text-center w-full"> Search for a location to get your 7 day forecast! </div> }
    }
    

return (

        <ul className="flex flex-col flex-auto md:flex-row " id="weekly" >
             {test()}
        </ul>
    )
}

export default Week

// let adjustedDate = item.datetimeStr.substring(0,10);
// <Card temp={item.temp} low={item.low} high={item.high} date={adjustedDate} precip={item.pop} />