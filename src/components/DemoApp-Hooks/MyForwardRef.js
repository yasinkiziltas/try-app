import React, { useRef } from 'react'
import CustomBtn from '../Button'

export default function MyForwardRef() {
  const btnRef = useRef()
  return (
    <div>
      <button onClick={() => {
        btnRef.current.addEventListener("click", () => {
          alert('CustomBtn tıklandı!')
        })
        console.log(btnRef.current.innerText);
      }}>Tıkla ve Custom Button Ref değerini göster!</button>

      <CustomBtn ref={btnRef} text="Custom Ref Button " />
    </div>
  )
}
