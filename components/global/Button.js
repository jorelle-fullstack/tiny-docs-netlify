

const Button = ({ children, className, onClick = () => null }) => {
  const handleclick = () => {
    onClick()
  }
  return (
    <button onClick={handleclick} className={`btn ${className}`}>
      {children}
    </button>
  )
}

export default Button
