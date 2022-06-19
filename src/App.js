import React, { useState } from 'react'
import './app.css'
import DynamicCssStyle from './components/DemoApp-DynamicStyles/DynamicCssStyle'
import DynamicInlineStyle from './components/DemoApp-DynamicStyles/DynamicInlineStyle'
import Styled from './components/DemoApp-StyledComponents/Styled'

export default function App() {
  return (
    <div className="App">
      <Styled />
    </div>
  )
}
