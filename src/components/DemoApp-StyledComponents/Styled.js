import React from 'react'
import '../../app.css'
import styled from 'styled-components'

export default function Styled() {
    const Button = styled.button`
    color: #5c0011;
    font-size: 16px;
    font-weight: 800
    border: 2px solid #5c0011;
    border-radius: 8px;
    padding: 8px 16px;
    outline: none;
    `
    const PrimaryBtn = styled(Button)`
    color: red;
    border: 2px solid #ff7875;
    `
    return (
        <>
            <Button>Hello main button!</Button>
            <PrimaryBtn>Hello primary button!</PrimaryBtn>
        </>
    )
}
