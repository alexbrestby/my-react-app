import './Button.sass'

const Button = ({ children, isActive, ...props }) => {
  return (
    <button className={isActive ? 'button active' : 'button'} {...props}>
      {children}
    </button>
  )

}

export default Button