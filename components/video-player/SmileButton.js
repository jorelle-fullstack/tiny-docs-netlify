
// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'

// Components
import Image from 'next/image'

// Assets
import smileIcon from '../../assets/images/smile-icon.svg'

export default class SmileButton extends React.Component {
  constructor(props) {
    super(props)
    this.tempParticles = React.createRef()
  }
  render () {
   
    const showParticles = () => {
      const particles = 12;
      const elements = []
      const particleArea = <div id='particles' className='particles' ref={this.tempParticles}></div>
      ReactDOM.render(particleArea, document.getElementById('smile-btn'))
      for (var i = 0; i < particles; i++) {
        const size = Math.floor(Math.random() * 50 + 5)
        const particle = <img key={i} className={`smile-particle particle-${i}`} src={smileIcon.src}
        style={{
          width: size,
          height: size,
          position: 'absolute',
        }} />
        console.log(i)
        elements.push(particle)
        if (i == 0) { // no need to add the listener on all generated elements
          particle.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
            this.tempParticles.remove(); // remove this explosion container when animation ended
          });
        }
        // explosion.append(elm);

      }
      setTimeout(() => {
      ReactDOM.render(elements, document.getElementById('particles'))
      }, 200);

    }
   
    const handleClick = (e) => {
        showParticles()
    }

    return (
        <button id='smile-btn' className='btn smile-btn' onClick={handleClick}>
            <h3>{this.props.count}</h3>
            <img className='smile' src={smileIcon.src} />
        </button>
    )
  }
}
/*
const SmileButton = ({ onClick = () => null, count, smiled = false}) => {
    
    
}

export default SmileButton

*/