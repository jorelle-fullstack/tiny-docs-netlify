// Components
import Image from 'next/image'

const WatchEntry = ({ thumbnail, title }) => {
    return(
        <div className='history-entry'>
            <Image className='thumbnail' src={thumbnail.src} height={139} width={243} />
            <h4>{title}</h4>
        </div>
    );
}
export default WatchEntry