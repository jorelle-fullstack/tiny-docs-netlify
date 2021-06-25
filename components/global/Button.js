

const Button = ({ children, className, type = 'button', onClick = () => null }) => {
  const handleclick = () => {
    onClick()
  }
  return (
    <button type={type} onClick={handleclick} className={`btn ${className}`}>
      {children}
    </button>
  )
}

export default Button
