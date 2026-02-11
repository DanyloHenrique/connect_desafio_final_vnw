import { NavLink } from 'react-router'
import { LuEllipsis } from 'react-icons/lu'

import eu from '@/assets/eu.jpg'
import styles from './header.module.scss'

import { Logo } from '../logo'
import { ListLinks } from '../Nav/ListLinks'
import { DialogNav } from '../Nav/DialogNav'
import { useState } from 'react'

export function Header() {
  const [isVisibleDialog, setIsVisibleDialog] = useState(false)

  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.header__nav}>
        <div
          aria-describedby="tooltip"
          className={`mobile ${styles.header__nav__wrapper}`}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              setIsVisibleDialog(false)
            }
          }}
        >
          <button
            type="button"
            onClick={() => {
              setIsVisibleDialog((prev) => !prev)
            }}
          >
            <LuEllipsis className={`${styles.header__nav__icon}`} />
          </button>

          <DialogNav IsVisible={isVisibleDialog} />
        </div>

        <ul className={`${styles.header__nav__ul} desktop`}>
          <ListLinks />
        </ul>

        <NavLink to={'/user/'}>
          <img
            src={eu}
            alt="Imagem de perfil"
            className={styles.header__nav__img}
          />
        </NavLink>
      </nav>
    </header>
  )
}
