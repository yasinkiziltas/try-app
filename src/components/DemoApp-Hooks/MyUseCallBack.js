import React, { useCallback, useState } from 'react'
import '../../app.css'
const functionCount = new Set()

export default function MyUseCallBack() {
    const [counter, setCounter] = useState(0)
    const [otherCounter, setOtherCounter] = useState(0)

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    // const decrement = () => {
    //     setCounter(counter - 1)
    // }

    // const otherIncrement = () => {
    //     setOtherCounter(otherCounter + 1)
    // }

    const increment = useCallback(() => {
        setCounter(counter + 1)
    }, [counter])
 
    const decrement = useCallback(() => {
        setCounter(counter - 1)
    }, [counter])
 
    const otherIncrement = useCallback(() => {
        setOtherCounter(counter + 1)
    }, [otherCounter])
 

    functionCount.add(increment)
    functionCount.add(decrement)
    functionCount.add(otherIncrement)
    console.log(functionCount);

    return (
        <div className='chart'>
            Sayaç: {counter}
            <button onClick={increment}>Arttır</button>
            <button onClick={decrement}>Azalt</button>
            <button onClick={otherIncrement}>Diğer Sayacı Arttır</button>
        </div>
    )
}
