import React from 'react'
export default function ErrorButton(props) {
  return (
    <button className="error-enter" onClick={e => props.onClick(e)}>
      {props.buttonText}
    </button>
  )
}
