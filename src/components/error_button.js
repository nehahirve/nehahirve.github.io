import React from 'react'
export default function ErrorButton(props) {
  function handleClick() {
    if (props.buttonText === 'MUCH WOW') {
      window.location = 'https://www.gatsbyjs.com/'
    }
  }

  return (
    <button className="error-enter" onClick={handleClick}>
      {props.buttonText}
    </button>
  )
}
