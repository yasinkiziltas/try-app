import React from 'react'

export default function Text({ text, text2 }) {
    return (
        <React.Fragment>
            <div>
                {text}
            </div>
            <div>
                {text2}
            </div>
        </React.Fragment>
    )
}
