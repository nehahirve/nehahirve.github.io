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
        <button className="close"></button>
        <div className="title">
          <div className="bars"></div>
          <h1>{props.windowHeading}</h1>
          <div className="bars"></div>
        </div>
      </div>
      <div className="window-content">
        <p style={{ fontSize: props.fontSize }}>{props.innerText}</p>
      </div>
    </section>
  )
}
