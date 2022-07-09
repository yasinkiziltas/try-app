import React, {useRef} from 'react'
import CustomBtn from '../Button'

export default function MyForwardRef() {
  const btnRef = useRef()
  return (
    <div>
        <CustomBtn ref={btnRef}/>
    </div>
  )
}
