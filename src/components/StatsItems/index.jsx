import React from 'react'

import styles from './statsItems.module.scss'

export const StatsItems = ({ title, text }) => {
  return (
    <div className={styles.statsItems}>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  )
}
