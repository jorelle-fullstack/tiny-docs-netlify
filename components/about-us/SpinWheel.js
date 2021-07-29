// Dependencies
import { useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
// Assets
import knobPointer from '../../assets/images/knob-pointer.svg'
import knobArrow from '../../assets/images/wheel-arrow.svg'

// Components
import Image from 'next/image'
const SpinWheel = () => {
    const [valueIndex, setValueIndex] = useState(0)
    const values = [
        {
            sign: 'Magic',
            title: 'Inspire Awe',
            body: '"Those who don’t believe in magic will never find it." -Roald Dahl'
        },
        {
            sign: 'Greatness',
            title: "Don't be good, be great!",
            body: `This is the only way to get a billion smiles. Strive for excellence in all that you do. “Be not afraid of greatness"
            -W. Shakespeare`
        },
        {
            sign: 'Collaboration',
            title: "Together we can",
            body: `"Together we can achieve big things. Alone we can do so little: Together we can do so much."
            -H. Keller`
        },
        {
            sign: 'Imagination',
            title: 'Use that big brain',
            body: `To think your way around a problem. "Everything you can imagine is real."
            -P. Picasso`
        },
        {
            sign: 'Compassion',
            title: "Be Kind",
            body: `"The purpose of human life is to serve, and to show compassion and the will to help others."
            -A. Schweitzer`
        },
        {
            sign: 'Curiosity',
            title: "Seek Understanding",
            body: `"The important thing is to not stop questioning."
            -A. Einstein`
        },
        {
            sign: 'Fun',
            title: "If you aren’t having fun, we’re doing something wrong",
            body: `"No one looks stupid when they are having fun."
            -A. Poehler`
        }
    ]
    const handleClick = () => {
        let newIndex = valueIndex+1;
        if (newIndex >= values.length) { newIndex = 0 }
        setValueIndex(newIndex)
        console.log(newIndex)
    }

    return(
        <div className='spin-wheel'>
            <div className='wrapper'>
                <SwitchTransition >
                    <CSSTransition key={valueIndex} classNames='pop'>
                    <div class='values'>
                            <h2 className='text-disabled'>{values[valueIndex].title}</h2>
                            <p className='text-disabled'>{values[valueIndex].body}</p>
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