import React from 'react'
import hand from '../../static/SVG/hand.svg'
import Anime, { anime } from 'react-anime'
import FSButton from './fs_button'
import Draggable from 'react-draggable'

export default function ButtonHand(props) {
  function fullScreenParent(e) {
    //e.preventDefault()

    console.log('this is the parent')
    //launchIntoFullscreen(e.target)
  }

  return (
    <Anime
      easing="easeInOutQuad"
      duration={1000}
      loop={false}
      translateX="-40rem"
      translateY="20rem"
    >
      <div className="hand-container">
        <FSButton></FSButton>
        <Anime
          easing="easeInOutQuad"
          duration={1000}
          loop={false}
          delay={1500}
          translateX="30rem"
          translateY="-50rem"
        >
          <img className="hand" src={hand} alt="" />
        </Anime>
      </div>
    </Anime>
  )
}
