import React, { useState } from 'react'
import '../../app.css'

export default function MyUseCallBack() {
    const [counter, setCounter] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    const otherIncrement = () => {
        setOtherCounter(otherCounter + 1)
    }

    return (
        <div className='chart'>
            Sayaç: {counter}
            <button onClick={increment}>Arttır</button>
            <button onClick={decrement}>Azalt</button>
            <button onClick={otherIncrement}>Diğer Sayacı Arttır</button>
        </div>
    )
}
