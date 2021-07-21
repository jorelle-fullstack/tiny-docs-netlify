
// Dependencies
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
// Components
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

// Assets
import smileIcon from '../../assets/images/smile-icon.svg'

const SmileButton = ({ onClick = () => null, count, smiled = false}) => {
    const elements = []
    const nodeRef = React.createRef(null)
    const [inProp, setInProp] = useState(false)
    const style = {
      position: 'absolute',
      width: '50px',
      height: '50px'
    }
  const handleClick = (e) => {
    showParticles()
}
  const showParticles = () => {
    const particles = 12
    // Renders the particles tag where the floating smile icons will appear.
    // const particleArea = <div id='particles' className='particles' ref={this.tempParticles}></div>
    // ReactDOM.render(particleArea, document.getElementById('smile-btn'))
    for (var i = 0; i < particles; i++) {

      // Size of particle.
      const size = Math.floor(Math.random() * 50 + 5)
      // Dynamic styling.
      const style = {
        position: 'absolute',
        width: size,
        height: size
      }
      
      // Dynamic animation using React Transition Group <CSSTransition/>.
      const classNames = {
        
      }
      // Smile particle.
            
            const particle = <CSSTransition key={i} unmountOnExit nodeRef={nodeRef} in={inProp} classNames='float' timeout={500}>
              <img ref={nodeRef} key={i} style={style} src={smileIcon.src} />
            </CSSTransition>

      elements.push(particle)
      if (i == 0) { // no need to add the listener on all generated elements
        // this.tempParticles.remove();
      }
    }
    // ReactDOM.render(elements, document.getElementById('particles'))
    setInProp(true)
    // FOR DEBUGGING ONLY
    setTimeout(() => {
      //ReactDOM.render(null, document.getElementById('particles'))
      setInProp(false)
    }, 1000);
  }
  return (
      <button id='smile-btn' className='btn smile-btn' onClick={handleClick}>
          <h3>{count}</h3>
          <div className=''>
            <div id='particles' className='particles'>
              {elements.map((element) => {
                return element
              })}
            <CSSTransition unmountOnExit nodeRef={nodeRef} in={inProp} classNames='float' timeout={500}>
              <img ref={nodeRef} tyle={style} src={smileIcon.src} />
            </CSSTransition>
            </div>
            <img className='smile' src={smileIcon.src} />
          </div>
      </button>
  )
}

export default SmileButton