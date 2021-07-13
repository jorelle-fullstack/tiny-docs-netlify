// Components
import clsx from 'clsx';
import Image from 'next/image'
import Quote from "../../assets/images/quote.svg"

const Testimony = ({ index, name, desc, statement, infoColor }) => {
    return(
        <div key={index} className={clsx('testimony', { "swiper-slide dark-blue": infoColor === 'dark blue', "swiper-slide green": infoColor === 'green' })}>
        <div className="holder">
                    <Image src={Quote} alt="Quote" />
                    <p className="statement">{statement}</p>
                    <div className="info">
                      <p className={clsx('name', { "name--dark": infoColor === 'dark blue', "name--light": infoColor === 'green'})}>{name}</p>
                      <p className={clsx('description', { "description--dark": infoColor === 'dark blue', "description--light": infoColor === 'green'})}>{desc}</p>
                    </div>
                  </div>
            </div>
    );
}

export default Testimony