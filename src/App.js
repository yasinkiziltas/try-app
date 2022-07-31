import React from 'react'
import './app.css'
import DynamicCssStyle from './components/DemoApp-DynamicStyles/DynamicCssStyle'
import DynamicInlineStyle from './components/DemoApp-DynamicStyles/DynamicInlineStyle'
import Styled from './components/DemoApp-StyledComponents/Styled'
import CssModules from './components/DemoApp-CssModules/CssModules'
import DynamicCss from './components/DemoApp-CssModules/DynamicCss'
import Fragment from './components/DemoApp-Fragment-Ref-Portal/Fragment'
import Ref from './components/DemoApp-Fragment-Ref-Portal/Ref'
import Portal from './components/DemoApp-Fragment-Ref-Portal/Portal'
import CreateElmnt from './components/DemoApp-CreateElement/CreateElmnt'
import MyUseMemo from './components/DemoApp-Hooks/MyUseMemo'
import MyForwardRef from './components/DemoApp-Hooks/MyForwardRef'
import MyUseCallBack from './components/DemoApp-Hooks/MyUseCallBack'
import MyUseReducer from './components/DemoApp-Hooks/MyUseReducer'
import FormExample from './components/DemoApp-Inputs/FormExample'

export default function App() {
  return (
    <div>
      <FormExample />
    </div>
  )
}



{/* <Portal text="Body" target={document.body} /> */ }