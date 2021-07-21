// Components
import Image from 'next/image'
import clsx from 'clsx'
const IconButton = ({ focusable = false, noText = false, icon, children, className, loading, type = 'button', onClick = () => null }) => {
    const handleClick = () => { onClick() }
    return (
      <button type={type} onClick={handleClick} className={`btn icon ${className}`}>
          <img src={icon} />
        {loading ? <BeatLoader loading={true} color='white' /> : children}
      </button>
    )
  }
export default IconButton