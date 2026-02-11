import { ListLinks } from '../ListLinks'

import styles from './dialogNav.module.scss'

export const DialogNav = ({ IsVisible = false }) => {
  console.log('🚀 ~ DialogNav ~ IsVisible:', IsVisible)
  const combinedStyle = `${styles.dialog} ${IsVisible && styles.open}`

  return (
    <dialog className={combinedStyle} role="tooltip">
      <ListLinks />
    </dialog>
  )
}
