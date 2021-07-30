// Components
import { Button } from '../../components/global'
import Image from 'next/image'

// Assets
import tam from '../../assets/images/tam-clean.svg'

const WhitePaper = ({}) => {
    return(
        <div className="wp">
        <div className="wp-container">
            {/* "Coming Soon!" yellow strip.  Intentionally placed outside of the White Paper Container. */}
        <div className='strip'><h1>Coming Soon!</h1></div>
            {/* Tam, one of the mascots. */}
            <div className='tam'>
            <Image src={tam.src} width={294} height={303} alt='' />
            </div>
            <div className="body">
                <h1>&quot;White Paper Title&quot;</h1>
                <p>Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary. Short paragraph with the white paper summary.</p>
                <Button className="btn--banner-disabled">Read More</Button>
            </div>
        </div>
        </div>
    );
}

export default WhitePaper