import React from 'react'
import { loadableP5 as P5Wrapper } from './loadable'
import Sketch from './sketch'

export default function WindowFrame(props) {
  let windowContent = (
    <div className="window-content" style={{ fontSize: props.fontSize }}>
      {props.innerText}
    </div>
  )
  if (props.id === 'p5') {
    windowContent = <P5Wrapper sketch={Sketch} />
  }
  return (
    <section
      className={`window-frame ${props.id}`}
      style={{
        backgroundColor: props.color,
        height: props.height,
        maxWidth: props.width,
      }}
    >
      <div className="navbar">
        <button className="close" onClick={props.onWindowClose}></button>
        <div className="title">
          <div className="bars"></div>
          <h1>{props.windowHeading}</h1>
          <div className="bars"></div>
        </div>
      </div>
      {windowContent}
    </section>
  )
}
