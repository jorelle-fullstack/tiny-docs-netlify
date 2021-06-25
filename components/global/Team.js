import Link from "next/link";
import Image from "next/image";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Team = ({ title, content }) => {
  return (
    <div className="section-our-team">
      <div className="container">
        <h3>{title}</h3>
        <div className="team__wrapper">
          {content.map((member, i) => {
            return (
              <div key={i} className="team__wrapper--member">
                <Image src={member.image} alt={member.name} />
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
