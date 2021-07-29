// Dependencies
import { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
// Assets
import knobArrow from '../../assets/images/wheel-arrow.svg'

// Components
import Image from 'next/image'

const SpinWheel = ({ index, values, callback = () => null }) => {
    
    const handleClick = () => callback()

    return(
        <div className='spin-wheel'>
            <div className='wrapper'>
                <SwitchTransition >
                    <CSSTransition key={index}
                     addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                      }} classNames='pop' timeout={0}>
                    <div className='values'>
                            <h2 className='text-disabled'>{values[index].title}</h2>
                            <p className='text-disabled'>{values[index].body}</p>
                        </div>
                    </CSSTransition>
                </SwitchTransition>
                <div className='spinner'>
                <div className='arrow'>
                <Image src={knobArrow} width={85} height={110} />
            </div>
            <div className='knob'>
                <button onClick={handleClick} />
            </div>
                </div>
            </div>
        </div>
    )
}

export default SpinWheel