import React from 'react'
import styles from './Skillbar.module.css'

const Skillbar = ({label,percentage,style}) => {
  return (
    <div className={styles.bar}>
        <div className={styles.label}>
            <span>{label}</span>
        </div>
        <div className={style}>
            <span data-percentage={percentage}></span>
        </div>
    </div>
  )
}

export default Skillbar