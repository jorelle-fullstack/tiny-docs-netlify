
// Components
import Image from 'next/image'

// Assets
import smileIcon from '../../assets/images/smile-icon.svg'

const SmileButton = ({ onClick = () => null, count, smiled = false}) => {
      // get random number between min and max value
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max + 1)) + min;
      }
    const handleClick = (e) => {
        // explode(e.pageX, e.pageY)
        onClick()
    }
    return (
        <button className='btn smile-btn' onClick={handleClick}>
            <h3>{count}</h3>
            <img class='smile' src={smileIcon.src} />
        </button>
    )
}

export default SmileButton