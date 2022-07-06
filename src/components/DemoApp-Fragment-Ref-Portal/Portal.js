import React from 'react'
import ReactDOM from 'react-dom'

export default function Portal({ target, text }) { //
    return ReactDOM.createPortal(<div>
        Portal Componenti, my target is {text}
    </div>, target)
}
