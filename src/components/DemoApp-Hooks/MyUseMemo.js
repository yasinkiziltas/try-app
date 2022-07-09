import React, { useMemo, useState } from 'react'
import CustomText from '../CustomText'

export default function MyUseMemo() {
  const [data, setData] = useState("yaso")
  const [text, setText] = useState("")

  const memoData = useMemo(() => {
    return data;
  }, [data])

  return (
    <div>
      <CustomText />

      <button onClick={() => {
        setData("ahmet")
      }}>İsim değiştir</button>

      <div>
        State Data:  {data}
      </div>

      <div>
        Memo data: {memoData}

      </div>

      <input value={text} onChange={(e) => {
        setText(e.target.value)
      }} />
    </div>
  )
}
