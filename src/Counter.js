import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const performMinus = () => {
        setCount(count - 1);
    }

    const performPlus = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Counter</h2>
            <h1>{count}</h1>
            <button className='minus' onClick={performMinus}>-</button>
            <button className='plus' onClick={performPlus}>+</button>
        </div>
    )
}
