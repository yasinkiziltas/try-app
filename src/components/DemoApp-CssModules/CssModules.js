import React from 'react'
import styles from './CustomStyle.module.css'

export default function CssModules() {
  return (
    <div >
      Css Modules
      <div className={styles.modulerCss}>
        Hello World!
      </div>
      <div>
          <button className={styles.customBtn}>Merhaba Dünya</button>
        </div>
    </div>
  )
}
