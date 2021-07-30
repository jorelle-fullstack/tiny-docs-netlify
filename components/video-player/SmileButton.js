
// Dependencies
import React, { useState, useEffect } from 'react'
// Components
import Image from 'next/image'
import { Transition, TransitionGroup } from 'react-transition-group'

// Assets
import smileIcon from '../../assets/images/smile-icon.svg'

const SmileButton = ({ onClick = () => null, count, smiled = false}) => {
  // Smile particle elements.
  const [elements, setElements] = useState([])

  const handleClick = (e) => {
    renderParticles()
  }
  const renderParticles = () => {
    const particles = 12
    const els = []
    // Renders the particles tag where the floating smile icons will appear.
    for (var i = 0; i < particles; i++) {

      /* RANDOMIZED VARIABLES FOR ANIMATION */

      // Size of particle.
      const size = Math.floor(Math.random() * (50 - 24) + 24)
      // How far the particle travels.
      const length = Math.floor((Math.random() * (400 - 100) + 100))
      
      // Deviation of the direction the particle travels towards.
      let deviation = Math.floor((Math.random() * (250 - 50) + 50))
      deviation *= Math.round(Math.random()) ? 1 : -1

      // The duration of how long the particle stays alive.
      const duration = `${i+2}000`

      // Particle style.
      const style= {
        width: size,
        position: 'absolute',
        height: size
      }

      // Default transition state.
      const defaultStyle = {
        opacity: 0,
        transition: 'all 800ms ease-in',
      }
      
      // Transition styles.
      const tStyles = {
        entering: {
          opacity: 1,
          transition: 'opacity 800ms ease-out'
        },
        entered: {
          opacity: 0,
          transform: `translate(${deviation}px, -${length}px)`
        }
      }

      const Float = ({ in: inProp }) => (
        <Transition in={inProp} timeout={duration}>
          {state => (
            <div style={{
              ...defaultStyle,
            ...tStyles[state]
            }}>
              <Image key={i} style={style} width={size} height={size} src={smileIcon.src} alt='' />
            </div>
          )}
        </Transition>
      )
      // Smile particle.
      const particle = <Float />
      els.push(particle)
    }
    setElements(els)
  }
  return (
      <button id='smile-btn' className='btn smile-btn' onClick={handleClick}>
          <h3>{count}</h3>
          <div className=''>
          <TransitionGroup id='particles' className='particles'>
                {elements.map((element) => { return element })}
              </TransitionGroup>
            <div className='smile'>
              <Image width={42} height={42} src={smileIcon.src} alt='' />
            </div>
          </div>
      </button>
  )
}

export default SmileButton