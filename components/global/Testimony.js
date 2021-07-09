// Components
import clsx from 'clsx';
import Image from 'next/image'
import Quote from "../../assets/images/quote.svg"

const Testimony = ({ index, name, desc, statement, infoColor }) => {
    return(
        <div key={index} className={clsx({ "swiper-slide dark-blue": infoColor === 'dark blue', "swiper-slide green": infoColor === 'green' })}>
        <div className="testimony__holder">
                    <Image src={Quote} alt="Quote" />
                    <p className="testimony__statement">{statement}</p>
                    <div className="testimony__info">
                      <p className={clsx({ "testimony__name--dark": infoColor === 'dark blue', "testimony__name light": infoColor === 'green'})}>{name}</p>
                      <p className="testimony__description--dark">{desc}</p>
                    </div>
                  </div>
            </div>
    );
}

export default Testimony