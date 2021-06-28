
import BeatLoader from "react-spinners/BeatLoader";

const Button = ({ children, className, loading, type = 'button', onClick = () => null }) => {
  console.log(loading)
  const handleclick = () => {
    onClick()
  }
  return (
    <button type={type} onClick={handleclick} className={`btn ${className}`}>
      {loading ? <BeatLoader loading={true} color='white' /> : children}
    </button>
  )
}

export default Button
