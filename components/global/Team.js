import Link from "next/link";
import Image from "next/image";
import { useState } from 'react'
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, SwitchTransition } from "react-transition-group";
const Team = ({ title, content }) => {
  const [hovered, setHovered] = useState(false)
  return (
    <div className="section-our-team">
      <div className="container">
        <h3>{title}</h3>
        <div className="team__wrapper">
          {content.map((member, i) => {
            return (
              <div key={i} className="team__wrapper--member"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              >
                <div className='photo'>
                <SwitchTransition>
                  <CSSTransition key={i} classNames='fade'>
                  <Image src={ hovered ? member.babyImage : member.image } alt={member.name} />
                  </CSSTransition>
                </SwitchTransition>
                </div>
                <p>{member.name}</p>
                <p>{member.position}</p>
                <Link href="/">
                  <a
                    className="team__wrapper--link"
                    href={member.link}
                    rel="nofollow noreferrer noopener"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
