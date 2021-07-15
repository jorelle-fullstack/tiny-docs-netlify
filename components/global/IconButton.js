// Components
import Image from 'next/image'
import clsx from 'clsx'
const IconButton = ({ focusable = false, noText = false, icon, children, className, loading, type = 'button', onClick = () => null }) => {
    const handleclick = () => { onClick() }
    return (
      <button type={type} onClick={handleclick} className={`btn active icon ${className}`}>
          <img src={icon} />
        {loading ? <BeatLoader loading={true} color='white' /> : children}
      </button>
    )
  }
export default IconButton