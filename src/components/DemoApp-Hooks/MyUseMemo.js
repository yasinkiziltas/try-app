import React, {memo, useState } from 'react'
import CustomText from '../CustomText'

export default function MyUseMemo() {
  const [text,setText] = useState("")
  return (
    <div>
      <CustomText />
      <input value={text} onChange={(e) => {
          setText(e.target.value)
      }}/>
    </div>
  )
}
