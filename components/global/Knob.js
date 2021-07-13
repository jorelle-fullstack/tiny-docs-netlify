import React from 'react'
export default class Knob extends React.Component {
    constructor(props) {
        super(props)
        this.randomDeg = Math.floor(Math.random() * 360)
        
    }
    componentDidMount () {
        const knobBody = document.getElementById('knob-body')
        knobBody.style.transform = `rotate(${this.randomDeg}deg)`
    }
    render () {
        return (
            <div class='knob'>
                    <div id="knob-body" className='body' style={{transform: `rotate(${this.props.scrollPos + this.randomDeg}deg)`}}>
                        <hr className='handle' />
                    </div>
                <div className='knob-shadow' />
            </div>
        )
    }
}