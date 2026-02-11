import { NavLink } from 'react-router'

export const ListLinks = () => {
  return (
    <>
      <NavLink to={'/feature/2'}>Doação</NavLink>
      <NavLink to={'/feature/4'}>Voluntariado</NavLink>
      <NavLink to={'/feature/3'}>Mentoria</NavLink>
      <NavLink to={'/feature/1'}>Eventos & Palestras</NavLink>
    </>
  )
}
