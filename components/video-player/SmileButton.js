
// Components
import Image from 'next/image'

// Assets
import smileIcon from '../../assets/images/smile-icon.svg'

const SmileButton = ({ onClick = () => null, count, smiled = false}) => {

    const explode = (x, y) => {
        const particles = 12
          // explosion container and its reference to be able to delete it on animation end
        let explosion = '<div id="smile-fx" className="smile-explosion"></div>'
        // put the explosion container into the body to be able to get it's size
        let button = document.getElementsByTagName('body')
        button = button[0]
        button.innerHTML += explosion
        explosion = document.getElementById('smile-fx')
        console.log(explosion.style.width)
        // position the container to be centered on click
        explosion.style.left = x - 100 / 2
        explosion.style.top = y - 100 / 2

        for (var i = 0; i < particles; i++) {
          // positioning x,y of the particle on the circle (little randomized radius)
          var x = (explosion.width() / 2) + rand(80, 150) * Math.cos(2 * Math.PI * i / rand(particles - 10, particles + 10)),
            y = (explosion.height() / 2) + rand(80, 150) * Math.sin(2 * Math.PI * i / rand(particles - 10, particles + 10)),
            color = rand(0, 255) + ', ' + rand(0, 255) + ', ' + rand(0, 255), // randomize the color rgb
              // particle element creation (could be anything other than div)
            elm = $('<div className="particle" style="' +
              'background-color: rgb(' + color + ') ;' +
              'top: ' + y + 'px; ' +
              'left: ' + x + 'px"></div>');
      
          if (i == 0) { // no need to add the listener on all generated elements
            // css3 animation end detection
            elm.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
              explosion.remove(); // remove this explosion container when animation ended
            });
          }
          explosion.append(elm);
        }
      }
      
      // get random number between min and max value
    const rand = (min, max) => {
        return Math.floor(Math.random() * (max + 1)) + min;
      }
    const handleClick = (e) => {
        // explode(e.pageX, e.pageY)
        onClick()
    }
    return (
        <button className='btn smile-btn' onClick={handleClick}>
            <h3>{count}</h3>
            <img class='smile' src={smileIcon.src} />
        </button>
    )
}

export default SmileButton