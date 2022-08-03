import React from 'react'

export default function SplitExample() {
  return (
    <div className='w-full h-screen flex items-center justify-center '>

      <button
        className='m-10 rounded border-2 w-25'
        onClick={() => {
          import('../utils').then(({ add }) => {
            console.log(add(1, 2))
          })
        }}>Topla</button>

      <button
        className='m-10 rounded border-2 w-25'
        onClick={() => {
          import('../utils').then(({ ConvertToUpper }) => {
            console.log(ConvertToUpper('osman'))
          })
        }}>Büyüt</button>
    </div>
  )
}
