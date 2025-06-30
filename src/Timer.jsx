import { useEffect, useState } from "react";

function Timer(){
const [seconds, setSeconds] = useState(0);

useEffect( () =>{
    // Set up a timer that increments seconds every 1000ms (1 second)
    const interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => {
        clearInterval(interval);
        console.log("Timer stopped!");
      };

}, []); // Empty dependency array ensures this runs once on mount

return (
<div>
    <h4>Timer:</h4>
    <p>{seconds} seconds</p>
</div>
);
}

export default Timer;