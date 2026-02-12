import styles from './button.module.scss'

export const Button = ({
  type = 'button',
  handleClick,
  children,
  isSecondary = false,
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.button} ${isSecondary && styles.button__secondary}`}
    >
      {children}
    </button>
  )
}
