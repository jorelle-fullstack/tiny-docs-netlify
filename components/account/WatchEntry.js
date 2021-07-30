// Dependencies
import { CSSTransition } from 'react-transition-group'

// Components
import Image from 'next/image'

const WatchEntry = ({ thumbnail, title }) => {
    return(
        <CSSTransition in={true} appear={true} classNames='fade'>
            <div className='history-entry'>
                <div className='thumbnail'>
                <Image src={thumbnail} width={243} height={139} alt='' />
                </div>
                <h4>{title}</h4>
            </div>
        </CSSTransition>
    );
}
export default WatchEntry