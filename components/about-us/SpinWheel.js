// Dependencies
import { CSSTransition, SwitchTransition } from 'react-transition-group'

// Assets
import knobArrow from '../../assets/images/wheel-arrow.svg'
import tom from '../../assets/images/tom-right.png'
import tomSpeech from '../../assets/images/tom-speech-bubble-about-us.png'

// Components
import Image from 'next/image'

const SpinWheel = ({ index, values, callback = () => null }) => {
    const handleClick = () => callback()
    return(
        <div className='spin-wheel'>
            <div className='tom'>
                <div className='speech'>
                    <Image src={tomSpeech} height={57} width={398} alt='' />
                </div>
                <div className='caretoon'>
                <Image src={tom} height={285} width={278} alt='' />
                </div>
        </div>
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
                <Image src={knobArrow} width={85} height={110} alt='' />
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