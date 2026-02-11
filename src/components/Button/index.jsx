import styles from './button.module.scss'

export const Button = ({
  type = "button",
  handleClick,
  children,
  isSecondary = false,
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.button} ${isSecondary && styles.button__secondary}`}	
	  onFocus
      {...rest}
    >
      {children}
    </button>
  )
}
