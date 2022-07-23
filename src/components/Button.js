import React, { forwardRef } from 'react'

const CustomBtn = (props) => {
    return (
        <button ref={props.ref}>{props.text}</button>
    )
}

export default CustomBtn;