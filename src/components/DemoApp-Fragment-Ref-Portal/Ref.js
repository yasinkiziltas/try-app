import React, { useRef } from 'react'

export default function Ref() {
    const myCustomInput = useRef();
    return (
        <div>
            <input ref={myCustomInput} className='inpt' />
            <button onClick={() => {
                console.log(myCustomInput.current.value);
                console.log(myCustomInput.current.className);
            }}>İnputun içeriğini yazdır</button>
        </div>
    )
}
