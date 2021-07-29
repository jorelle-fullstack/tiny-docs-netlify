// Components
import TeamPhoto from './TeamPhoto'

const Team = ({ title, content }) => {
  return (
    <div className="section-our-team">
      <div className="container">
        <h3>{title}</h3>
        <div className="team__wrapper">
          {content.map((member, i) => {
            return (
              <TeamPhoto
              index={i}
              name={member.name}
              image={member.image}
              babyImage={member.babyImage}
              position={member.position}
              twitter={member.link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
