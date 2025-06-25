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
        } else { return <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"> Search for a location to get your 7 day forecast! </div> }
    }
    

return (

        <table className="table table-zebra bg-base-300 min-h-32" id="weekly" >
            <thead>
                <tr className="text-center">
                    <td>Date</td>
                    <td>Condition</td>
                    <td>High</td>
                    <td>Low</td>
                    <td>Precip</td>
                </tr>
            </thead>
            <tbody className="relative">
                {test()}                
                             
            </tbody>



        </table>
    )
}

export default Week

// let adjustedDate = item.datetimeStr.substring(0,10);
// <Card temp={item.temp} low={item.low} high={item.high} date={adjustedDate} precip={item.pop} />