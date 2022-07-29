import React, { useReducer } from 'react'

export default function MyUseReducer() {

  const initialState = {
    count: 0
  }

  const reducer = (state, { type, payload }) => {
    switch (type) {
      case "increment":
        return { count: state.count + payload }
      case "decrement":
        return { count: state.count - 1 }
      default: return 0;
    }

    return (
        
      <div>

      </div>
    )
  }
}
