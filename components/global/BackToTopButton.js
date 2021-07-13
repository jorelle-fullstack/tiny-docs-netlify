// Components
import Image from 'next/image'
// Assets
import goBackUp from '../../assets/images/go-back-up-button.webp'
const BackToTopButton = () => {

    const handleScroll = () => { window.scrollTo({top: 0, behavior: 'smooth'}) }
    return(
        <button className='btn btn--back-to-top' onClick={handleScroll}>
            <Image src={goBackUp} width={133} height={132} />
        </button>
    )
}

export default BackToTopButton