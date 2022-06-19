import React, { useState } from 'react'

export default function DynamicInlineStyle() {
    const [data, setData] = useState([
        {
            id: 1,
            name: 'Beşiktaş',
            rate: 35,
            count: 200,
            color: "linear-gradient(900deg, rgba(217,62,62,0.9808298319327731) 18%, rgba(211,230,16,1) 100%, rgba(255,255,255,1) 100%)"
        },
        {
            id: 2,
            name: 'Fenerbahçe',
            rate: 30,
            count: 170,
            color: "linear-gradient(#e66465, #9198e5)"
        },
        {
            id: 3,
            name: 'Galatasaray',
            rate: 25,
            count: 100,
            color: "linear-gradient(to bottom right, red, yellow)"
        },
        {
            id: 4,
            name: 'Beşiktaş',
            rate: 15,
            count: 300,
            color: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)"
        },
    ])

    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div key={index} style={{
                        height: item.count + "px",
                        width: item.rate + "%",
                        background: item.color
                    }}>
                        {item.name}
                        <p>Oy veren kişi sayısı: {item.count} </p>
                    </div>
                )
            })}
        </div>
    )
}
