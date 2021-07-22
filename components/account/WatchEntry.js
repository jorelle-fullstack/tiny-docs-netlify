// Dependencies
import { CSSTransition } from 'react-transition-group'

// Components
import Image from 'next/image'

const WatchEntry = ({ thumbnail, title }) => {
    return(
        <CSSTransition in={true} appear={true} classNames='fade'>
            <div className='history-entry'>
                <img className='thumbnail' src={thumbnail.src} />
                <h4>{title}</h4>
            </div>
        </CSSTransition>
    );
}
export default WatchEntry