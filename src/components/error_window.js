import React from 'react'
import ErrorButton from './error_button'

export default function ErrorWindow(props) {
  return (
    <section
      className={`error-window ${props.id}`}
      style={{
        maxWidth: props.width,
      }}
    >
      <div className="error-navbar">
        <div className="error-title">
          <h1>{props.errorName}</h1>
        </div>
        <button className="error-close"></button>
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
          <p>{props.innerText}</p>
        </div>
        <ErrorButton buttonText={props.buttonText} />
      </div>
    </section>
  )
}
