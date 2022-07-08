import React, {memo} from 'react'

const CustomText = () => {
    console.log("Custom Component çalışıyor!");
    return (
        <div>Custom Text</div>
    )
}
export default memo(CustomText);