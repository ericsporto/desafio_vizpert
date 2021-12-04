import React, { useEffect, useState } from 'react';
import Clock from "react-clock"
import "react-clock/dist/Clock.css"




function AnalogicClock () {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval (() =>{
            setTime(new Date())
        }, 1000)
    })

    return (
        <div className="clock"><Clock value={time} size={150} renderNumbers={true}/></div>
    )  
}

export default AnalogicClock