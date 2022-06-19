import React, { useState } from 'react'
import DynamicCssStyle from './components/DemoApp-DynamicStyles/DynamicCssStyle'
import DynamicInlineStyle from './components/DemoApp-DynamicStyles/DynamicInlineStyle'
import Styled from './components/DemoApp-StyledComponents/Styled'
import './app.css'

export default function App() {
  return (
    <div className="App">
      <Styled />
    </div>
  )
}
