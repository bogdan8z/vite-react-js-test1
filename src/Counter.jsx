import { useState, useEffect } from "react";
import './Counter.css'

function Counter(){
    const [count, setCount] = useState(0);

    const increaseCount = () => { 
    //  setCount(count + 1);
    //     setCount(count + 1);

        // setCount(prevCount => prevCount + 1);
       
       // setCount(count + 1)
       setCount ((prevCount) => prevCount +1 )//its callback: it will call all of them
       setCount ((prevCount) => prevCount +1 )
       // setCount(prevCount => prevCount + 1);
    };


    useEffect(() => {
      setCount(0); // Reset count when component mounts or updates
      console.log("Component mounted!");
    }, []); // Runs only on mount

  // useEffect runs after every render
useEffect(() => {
  console.log("Component updated! Count:", count);
});

useEffect(() => {
  console.log("Count changed!", count);
  document.title = `Count: ${count}`;
}, [count]);

    return (
    <div className="card">xd
        <button onClick={increaseCount}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
     </div>
    );
}

export default Counter;