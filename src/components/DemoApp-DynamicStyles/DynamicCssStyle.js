import React, { useState } from 'react'
import '../../app.css'

export default function DynamicCssStyle() {
    const [data, setData] = useState([
        {
            id: 1,
            age: 65,
        },
        {
            id: 2,
            age: 50,
        },
        {
            id: 3,
            age: 35,
        },
    ])
    return (
        <div>
            {data.map((item, index) => {
                const getStatus = (item) => {
                    if (item.age == 65) {
                        return "high"
                    }
                    if (item.age == 50) {
                        return "medium"
                    }
                    return "minimal"
                }
                return (
                    <div key={index} className={`riskStatus ${getStatus(item)}`}>
                        <p>Yaş Durumuna Göre Risk: {item.age}</p>
                    </div>
                )
            })}
        </div>
    )
}
