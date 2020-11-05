import React from 'react'

export default function WindowFrameClosed(props) {
  return (
    <section
      className={`window-frame ${props.id}`}
      style={{
        width: props.width,
        height: props.height,
        boxShadow: 'none',
        border: 'none',
      }}
    >
      <div
        className="navbar"
        style={{
          width: '15rem',
          height: '2.5rem',
          boxShadow: '-10px 10px 0 rgba(0, 0, 0, 0.4)',
          border: '1px solid black',
        }}
      >
        <button
          className="close"
          style={{
            backgroundColor: props.color,
          }}
          onClick={props.onWindowOpen}
        ></button>
        <div className="title">
          <h1>{props.windowHeading}</h1>
        </div>
      </div>
    </section>
  )
}
