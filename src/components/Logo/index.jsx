import { NavLink } from 'react-router'
import LogoSVG from '@/assets/logo.svg?react'

export const Logo = () => {
  return (
    <NavLink to={'/'}>
      <img src={LogoSVG} alt="Logotipo do site Connect" height={40}/>
    </NavLink>
  )
}
