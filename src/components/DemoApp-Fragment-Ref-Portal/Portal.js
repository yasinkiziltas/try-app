import React from 'react'
import ReactDOM from 'react-dom'

export default function Portal({ target, text }) { //
    return ReactDOM.createPortal(<div>
        Selam ben Portal Componenti, hedefim ise  {text}
    </div>, target)
}
