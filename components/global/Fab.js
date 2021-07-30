// Components
import Image from 'next/image'

const Fab = ({icon, className = null, onClick = () => null}) => {
    const handleClick = () => { onClick() }
    return(
        <button className={`btn fab ${className}`} onClick={handleClick}>
            <Image src={icon} alt='' />
        </button>
    )
}
export default Fab