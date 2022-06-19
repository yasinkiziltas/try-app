import React, { useState } from 'react'
import DynamicCssStyle from './components/DemoApp-DynamicStyles/DynamicCssStyle'
import DynamicInlineStyle from './components/DemoApp-DynamicStyles/DynamicInlineStyle'
import Styled from './components/DemoApp-StyledComponents/Styled'
import CssModules from './components/DemoApp-CssModules/CssModules'
import DynamicCss from './components/DemoApp-CssModules/DynamicCss'
import './app.css'

export default function App() {
  return (
    <div className="App">
      <DynamicCss />
    </div>
  )
}
