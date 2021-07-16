
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
      
      // Renders the particles tag where the floating smile icons will appear.
      // const particleArea = <div id='particles' className='particles' ref={this.tempParticles}></div>
      // ReactDOM.render(particleArea, document.getElementById('smile-btn'))
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
          // this.tempParticles.remove();
        }
      }
      ReactDOM.render(elements, document.getElementById('particles'))

      // FOR DEBUGGING ONLY
      setTimeout(() => {
        ReactDOM.render(null, document.getElementById('particles'))
      }, 1000);
    }
   
    const handleClick = (e) => {
        showParticles()
    }

    return (
        <button id='smile-btn' className='btn smile-btn' onClick={handleClick}>
            <h3>{this.props.count}</h3>
            <div className=''>
              <div id='particles' className='particles'></div>
            <img className='smile' src={smileIcon.src} />
            </div>
        </button>
    )
  }
}
/*
const SmileButton = ({ onClick = () => null, count, smiled = false}) => {
    
    
}

export default SmileButton

*/