import React, {useState} from "react";

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        setCount((prev) => prev + 1);
    }

    const decrement = () => {
        setCount((prev) => prev - 1);
    }

    const reset = () => {
        setCount(0);
    }


    return (
        <div style={{textAlign: 'center'}}>
            <h1>
                Count <h3 data-testid="counter"> {count}</h3>
            </h1>
            <div>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>decrement</button>
                <button onClick={reset}>reset</button>
            </div>
        </div>
    )
}

export default Counter;