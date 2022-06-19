import React from 'react'
import styles from './CustomStyleDynamic.module.css'

export default function DynamicCss() {
    const [data, setData] = React.useState([
        {
            text: "Yasin",
            status: "success"
        }, 
        {
            text: "Ali",
            status: "error"
        }, 
        {
            text: "Ahmet",
            status: "primary"
        }, 
    ])
  return (
    <div>
        <div>
            {
                data.map((item) => {
                    return(
                        <div className={styles[item.status]}>
                            {item.text}
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
