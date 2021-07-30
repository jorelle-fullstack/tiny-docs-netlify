import Image from "next/image";
import Tim from "../../assets/images/tim.png";
import IAmTim from "../../assets/images/i-am-tim.png";

const Advisors = ({ title, description, advisorsCol1, advisorsCol2, advisorsCol3 }) => {
  
  return (
    <div className="section-our-advisors">
      <div className="container">
        <div className="heading__wrapper">
          <p>{title}</p>
          <p>{description}</p>
        </div>
        <div className="advisors__wrapper">
          <div className="advisors__wrapper--col">
            {advisorsCol1.map((advisor, i) => {
              return (
                <div key={i} className="advisors__wrapper--item">
                  <p>{advisor.name}</p>
                  {advisor.information.map((item, j) => {
                    return <p key={j}>{item.informationItem}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="advisors__wrapper--col">
            {advisorsCol2.map((advisor, i) => {
              return (
                <div key={i} className="advisors__wrapper--item">
                  <p>{advisor.name}</p>
                  {advisor.information.map((item, j) => {
                    return <p key={j}>{item.informationItem}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="advisors__wrapper--col">
            {advisorsCol3.map((advisor, i) => {
              return (
                <div key={i} className="advisors__wrapper--item">
                  <p>{advisor.name}</p>
                  {advisor.information.map((item, j) => {
                    return <p key={j}>{item.informationItem}</p>;
                  })}
                </div>
              );
            })}
          </div>
          <div className="image__wrapper">
          <div className='tom'>
                <div className='speech'>
                    <Image src={IAmTim} height={58} width={174} />
                </div>
                <img className='caretoon' src={Tim.src} height={285} width={278} />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisors;
