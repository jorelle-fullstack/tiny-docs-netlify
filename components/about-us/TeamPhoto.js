// Dependencies
import Link from "next/link";
import { useState } from 'react'
import { CSSTransition, SwitchTransition } from "react-transition-group";

// Components
import Image from "next/image";

// Assets
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TeamPhoto = ({ index, image, babyImage, name, position, twitter}) => {
  const [hovered, setHovered] = useState(false)
    return(
        <div key={index} className="team__wrapper--member"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              >
                <SwitchTransition key={index} mode='out-in'>
                  <CSSTransition key={ hovered ? 'baby-'+name : name } addEndListener={(node, done) => {
                    node.addEventListener("transitionend", done, false);
                  }} classNames='pop' timeout={200}
                  >
                <div className='photo'>
                      {hovered ? 
                    <Image src={babyImage} alt={name} /> :
                    <Image src={image} alt={name} />
                    }
                </div>
                  </CSSTransition>
                </SwitchTransition>
                <p>{name}</p>
                <p>{position}</p>
                <Link href="/">
                  <a
                    className="team__wrapper--link"
                    href={twitter}
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </div>
    )
}

export default TeamPhoto