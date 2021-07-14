// Components
import Image from 'next/image'

const WatchEntry = ({ thumbnail, title }) => {
    return(
        <div className='history-entry'>
            <img className='thumbnail' src={thumbnail.src} />
            <h4>{title}</h4>
        </div>
    );
}
export default WatchEntry