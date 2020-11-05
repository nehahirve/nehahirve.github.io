import React from 'react'

export default function WindowFrame(props) {
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
      <div className="window-content" style={{ fontSize: props.fontSize }}>
        {props.innerText}
      </div>
    </section>
  )
}
