import React, { createElement } from 'react'

const Typo = (props) => {
    const createEl = (text, as) => {
        const el = createElement(as, text)
        return el
    }
    return (
        <>
            {createEl(props.text, props.as)}
        </>
    )
}

export default function CreateElmnt() {
    const createDiv = (text) => {
        const el = createElement('div', {
            style: {
                height: "200px",
                width: "200px",
                backgroundColor: "red"
            }
        }, text)
        return el;
    }
    return (
        <div>
            <Typo text="Ben h1" as="h2" />

            {/* {createDiv(Math.random())}
            {createDiv(Math.random())}
            {createDiv(Math.random())}
            {createDiv(Math.random())} */}
        </div>
    )
}
