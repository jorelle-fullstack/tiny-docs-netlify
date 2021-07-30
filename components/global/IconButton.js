// Components
import Image from 'next/image'
import { BeatLoader } from 'react-spinners'

const IconButton = ({ focusable = false, noText = false, icon, children, className, loading, type = 'button', onClick = () => null }) => {
    const handleClick = () => { onClick() }
    return (
      <button type={type} onClick={handleClick} className={`btn icon ${className}`}>
          <Image src={icon} width={90} height={90} alt='' />
        {loading ? <BeatLoader loading={true} color='white' /> : children}
      </button>
    )
  }
export default IconButton