import React, { useState } from 'react'
import ErrorButton from './error_button'
import Draggable from 'react-draggable'

export default function ErrorWindow(props) {
  let [innerText, setText] = useState(props.innerText)
  let [closed, setClosed] = useState(false)
  let [height, setHeight] = useState('0px')
  let [width, setWidth] = useState('0px')

  function clickHandler(e) {
    e.preventDefault()
    if (e.target.textContent === 'LINKEDIN') {
      window.location = 'https://www.linkedin.com/in/neha-hirve-35064672/'
      console.log(innerText)
    } else if (e.target.textContent === 'GITHUB') {
      window.location = 'https://github.com/nehahirve/'
    } else if (e.target.textContent === 'INSTA') {
      window.location = 'https://www.instagram.com/nehahirve/'
    } else if (e.target.textContent === 'EMAIL') {
      setText('neha.s.hirve@gmail.com')
    } else if (e.target.textContent === 'IDK') {
      props.onIDKClick()
    } else if (e.target.textContent === 'MUCH WOW') {
      window.location = 'https://github.com/nehahirve/'
    }
  }

  function closeWindow(e) {
    setHeight(e.target.parentNode.parentNode.offsetHeight)
    setWidth(e.target.parentNode.parentNode.offsetWidth)
    console.log(height, width)
    setClosed(true)
  }

  const errorButtonList = props.buttonText.map(button => {
    return <ErrorButton buttonText={button} onClick={clickHandler} />
  })

  if (!closed) {
    return (
      <Draggable handle=".error-navbar">
        <div className="box no-cursor">
          <section
            className={`error-window ${props.id}`}
            style={{
              maxWidth: props.width,
              left: props.left + 'vw',
              top: props.top + 'rem',
            }}
          >
            <div className="error-navbar">
              <div className="error-title">
                <h1>{props.errorName}</h1>
              </div>
              <button className="error-close" onClick={closeWindow}>
                <svg
                  className="cross"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32px"
                  height="32px"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M 15.99 14.54C 15.99 14.54 14.54 15.99 14.54 15.99 14.54 15.99 8 9.45 8 9.45 8 9.45 1.46 15.99 1.46 15.99 1.46 15.99 0.01 14.54 0.01 14.54 0.01 14.54 6.55 8 6.55 8 6.55 8 0.01 1.46 0.01 1.46 0.01 1.46 1.46 0.01 1.46 0.01 1.46 0.01 8 6.55 8 6.55 8 6.55 14.54 0.01 14.54 0.01 14.54 0.01 15.99 1.46 15.99 1.46 15.99 1.46 9.45 8 9.45 8 9.45 8 15.99 14.54 15.99 14.54Z"
                    fill="black"
                    stroke="black"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
            <div className="error-window-content">
              <div className="error-top-content">
                <div className="error-cross">
                  <svg
                    className="cross"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M 15.99 14.54C 15.99 14.54 14.54 15.99 14.54 15.99 14.54 15.99 8 9.45 8 9.45 8 9.45 1.46 15.99 1.46 15.99 1.46 15.99 0.01 14.54 0.01 14.54 0.01 14.54 6.55 8 6.55 8 6.55 8 0.01 1.46 0.01 1.46 0.01 1.46 1.46 0.01 1.46 0.01 1.46 0.01 8 6.55 8 6.55 8 6.55 14.54 0.01 14.54 0.01 14.54 0.01 15.99 1.46 15.99 1.46 15.99 1.46 9.45 8 9.45 8 9.45 8 15.99 14.54 15.99 14.54Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="0.3"
                    />
                  </svg>
                </div>
                <p>{innerText}</p>
              </div>
              <div className="error-buttons">{errorButtonList}</div>
            </div>
          </section>
        </div>
      </Draggable>
    )
  } else {
    return (
      <section
        className={`error-window ${props.id}`}
        style={{
          width: width,
          height: height,
          backgroundColor: 'transparent',
          border: 'none',
          boxShadow: 'none',
        }}
      ></section>
    )
  }
}
